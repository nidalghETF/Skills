---
name: Breaking Change Detector
version: 1.0.0
description: Detect breaking changes and provide mitigation strategies
author: OpenClaw SysAdmin Community
tags: [13, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  changelog_path:
    type: string
    description: Changelog to analyze
    required: True
  current_config:
    type: object
    description: Current configuration
    required: False
output:
  status: string
  details: object
  mitigation_steps: array
dependencies:
  - openclaw/config
  - changelog-parser
security:
  - Validate changelog integrity; secure migration process per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Breaking Change Detector

## Description

Detect breaking changes and provide mitigation strategies

## Source Reference

This skill is derived from **13. Upgrade & Lifecycle Management** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Breaking Change Detection & Mitigation

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `changelog_path` | string | Yes | Changelog to analyze |
| `current_config` | object | No | Current configuration |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "mitigation_steps": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('breaking-change-detector', {
  changelog_path: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('breaking-change-detector', {
  changelog_path: "value",
  current_config: {}
});
```

## Security Considerations

Validate changelog integrity; secure migration process per Category 8

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
const result = await openclaw.skill.run('breaking-change-detector', { ... });
```

## Related Skills

- `version-diff-analyzer`
- `config-migration-runner`
 * @param {string} params.changelog_path - Changelog to analyze
 * @param {Object} params.current_config - Current configuration
