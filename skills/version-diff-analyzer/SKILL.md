---
name: Version Diff Analyzer
version: 1.0.0
description: Analyze version differences with SemVer compliance and breaking change detection
author: OpenClaw SysAdmin Community
tags: [13, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  current_version:
    type: string
    description: Current version
    required: True
  target_version:
    type: string
    description: Target version
    required: True
output:
  status: string
  details: object
  breaking_changes: array
dependencies:
  - openclaw/fs
  - semver
security:
  - Verify version signatures; prevent downgrade attacks per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Version Diff Analyzer

## Description

Analyze version differences with SemVer compliance and breaking change detection

## Source Reference

This skill is derived from **13. Upgrade & Lifecycle Management** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Version Diff Analysis

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `current_version` | string | Yes | Current version |
| `target_version` | string | Yes | Target version |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "breaking_changes": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('version-diff-analyzer', {
  current_version: "value",
  target_version: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('version-diff-analyzer', {
  current_version: "value",
  target_version: "value"
});
```

## Security Considerations

Verify version signatures; prevent downgrade attacks per Category 8

### Additional Security Measures

1. **Input Validation**: All inputs are validated before processing
2. **Least Privilege**: Operations run with minimal required permissions
3. **Audit Logging**: All actions are logged for security review
4. **Error Handling**: Errors are sanitized before returning to caller

## Troubleshooting

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Permission denied | Insufficient privileges | Check file/directory permissions |
| Invalid input | Malformed parameters | Validate input format |
| Dependency missing | Required module not installed | Run `npm install` |

### Debug Mode

Enable debug logging:
```javascript
openclaw.logger.setLevel('debug');
const result = await openclaw.skill.run('version-diff-analyzer', { ... });
```

## Related Skills

- `breaking-change-detector`
- `config-migration-runner`
 * @param {string} params.current_version - Current version
 * @param {string} params.target_version - Target version
