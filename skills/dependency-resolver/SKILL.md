---
name: Dependency Resolver
version: 1.0.0
description: Resolve skill dependencies using .clawdhub/lock.json and handle version conflicts
author: OpenClaw SysAdmin Community
tags: [5, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  skill_id:
    type: string
    description: Skill to resolve
    required: True
  force_update:
    type: boolean
    description: Force lock update
    required: False
output:
  status: string
  details: object
  dependency_tree: object
dependencies:
  - openclaw/fs
  - semver
security:
  - Verify dependency integrity per Category 8; scan for known vulnerabilities
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Dependency Resolver

## Description

Resolve skill dependencies using .clawdhub/lock.json and handle version conflicts

## Source Reference

This skill is derived from **5. Skill Ecosystem & Extensibility** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Dependency Resolution & Conflict Management

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `skill_id` | string | Yes | Skill to resolve |
| `force_update` | boolean | No | Force lock update |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "dependency_tree": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('dependency-resolver', {
  skill_id: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('dependency-resolver', {
  skill_id: "value",
  force_update: true
});
```

## Security Considerations

Verify dependency integrity per Category 8; scan for known vulnerabilities

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
const result = await openclaw.skill.run('dependency-resolver', { ... });
```

## Related Skills

- `clawdhub-package-manager`
- `vulnerability-scanner`
 * @param {string} params.skill_id - Skill to resolve
 * @param {boolean} params.force_update - Force lock update
