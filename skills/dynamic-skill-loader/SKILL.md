---
name: Dynamic Skill Loader
version: 1.0.0
description: Load and unload skills at runtime with version pinning support
author: OpenClaw SysAdmin Community
tags: [5, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  skill_id:
    type: string
    description: Skill identifier
    required: True
  action:
    type: string
    description: load|unload|reload
    required: True
  version:
    type: string
    description: Pinned version
    required: False
output:
  status: string
  details: object
  loaded_skills: array
dependencies:
  - openclaw/gateway
  - openclaw/fs
security:
  - Validate skill before loading per Category 8; prevent runtime code injection
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Dynamic Skill Loader

## Description

Load and unload skills at runtime with version pinning support

## Source Reference

This skill is derived from **5. Skill Ecosystem & Extensibility** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Dynamic Skill Loading/Unloading & Version Pinning

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `skill_id` | string | Yes | Skill identifier |
| `action` | string | Yes | load|unload|reload |
| `version` | string | No | Pinned version |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "loaded_skills": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('dynamic-skill-loader', {
  skill_id: "value",
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('dynamic-skill-loader', {
  skill_id: "value",
  action: "value",
  version: "value"
});
```

## Security Considerations

Validate skill before loading per Category 8; prevent runtime code injection

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
const result = await openclaw.skill.run('dynamic-skill-loader', { ... });
```

## Related Skills

- `sandbox-manager`
- `skill-manifest-validator`
 * @param {string} params.skill_id - Skill identifier
 * @param {string} params.action - load|unload|reload
 * @param {string} params.version - Pinned version
