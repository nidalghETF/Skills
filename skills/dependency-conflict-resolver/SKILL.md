---
name: Dependency Conflict Resolver
version: 1.0.0
description: Resolve version compatibility conflicts during upgrades
author: OpenClaw SysAdmin Community
tags: [13, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  conflict_packages:
    type: array
    description: Conflicting packages
    required: True
  resolution_strategy:
    type: string
    description: resolution strategy
    required: False
output:
  status: string
  details: object
  resolved_dependencies: object
dependencies:
  - openclaw/fs
  - semver
  - npm
security:
  - Verify dependency integrity; scan for vulnerabilities per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Dependency Conflict Resolver

## Description

Resolve version compatibility conflicts during upgrades

## Source Reference

This skill is derived from **13. Upgrade & Lifecycle Management** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Dependency Conflict Resolution

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `conflict_packages` | array | Yes | Conflicting packages |
| `resolution_strategy` | string | No | resolution strategy |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "resolved_dependencies": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('dependency-conflict-resolver', {
  conflict_packages: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('dependency-conflict-resolver', {
  conflict_packages: [],
  resolution_strategy: "value"
});
```

## Security Considerations

Verify dependency integrity; scan for vulnerabilities per Category 8

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
const result = await openclaw.skill.run('dependency-conflict-resolver', { ... });
```

## Related Skills

- `dependency-resolver`
- `vulnerability-scanner`
 * @param {Array} params.conflict_packages - Conflicting packages
 * @param {string} params.resolution_strategy - resolution strategy
