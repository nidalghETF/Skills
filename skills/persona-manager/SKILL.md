---
name: Persona Manager
version: 1.0.0
description: Manage multiple personas with context switching support
author: OpenClaw SysAdmin Community
tags: [19, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  persona_name:
    type: string
    description: Persona to activate
    required: True
  context:
    type: object
    description: Switch context
    required: False
output:
  status: string
  details: object
  active_persona: string
dependencies:
  - openclaw/config
  - openclaw/memory
security:
  - Persona isolation per Category 8; prevent persona confusion attacks
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Persona Manager

## Description

Manage multiple personas with context switching support

## Source Reference

This skill is derived from **19. Prompt Engineering & System Instructions** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Persona Management & Context Switching

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `persona_name` | string | Yes | Persona to activate |
| `context` | object | No | Switch context |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "active_persona": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('persona-manager', {
  persona_name: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('persona-manager', {
  persona_name: "value",
  context: {}
});
```

## Security Considerations

Persona isolation per Category 8; prevent persona confusion attacks

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
const result = await openclaw.skill.run('persona-manager', { ... });
```

## Related Skills

- `soul-md-designer`
- `memory-system-manager`
 * @param {string} params.persona_name - Persona to activate
 * @param {Object} params.context - Switch context
