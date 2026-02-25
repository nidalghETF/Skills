---
name: Sandboxed Execution Manager
version: 1.0.0
description: Manage security boundaries for skill execution with container isolation
author: OpenClaw SysAdmin Community
tags: [5, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  skill_id:
    type: string
    description: Skill to sandbox
    required: True
  isolation_level:
    type: string
    description: process|container|vm
    required: False
output:
  status: string
  details: object
  sandbox_status: string
dependencies:
  - openclaw/exec
  - docker|nsjail
security:
  - Container escape prevention per Category 8; resource limits; seccomp profiles
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Sandboxed Execution Manager

## Description

Manage security boundaries for skill execution with container isolation

## Source Reference

This skill is derived from **5. Skill Ecosystem & Extensibility** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Sandboxed Execution Environments

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `skill_id` | string | Yes | Skill to sandbox |
| `isolation_level` | string | No | process|container|vm |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "sandbox_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('sandbox-manager', {
  skill_id: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('sandbox-manager', {
  skill_id: "value",
  isolation_level: "value"
});
```

## Security Considerations

Container escape prevention per Category 8; resource limits; seccomp profiles

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
const result = await openclaw.skill.run('sandbox-manager', { ... });
```

## Related Skills

- `skill-manifest-validator`
- `container-lifecycle-manager`
 * @param {string} params.skill_id - Skill to sandbox
 * @param {string} params.isolation_level - process|container|vm
