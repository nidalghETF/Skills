---
name: Environment Variable Management
version: 1.0.0
description: Manage OPENCLAW_* environment variables with dotenv integration and precedence resolution
author: OpenClaw SysAdmin Community
tags: [1, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  action:
    type: string
    description: get|set|list|validate
    required: True
  var_name:
    type: string
    description: Variable name
    required: False
  var_value:
    type: string
    description: Variable value
    required: False
output:
  status: string
  details: object
  variables: array
dependencies:
  - openclaw/fs
  - dotenv
security:
  - Store sensitive vars in ~/.openclaw/credentials/ per Category 8 API Key Management; never log secrets
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Environment Variable Management

## Description

Manage OPENCLAW_* environment variables with dotenv integration and precedence resolution

## Source Reference

This skill is derived from **1. Foundation & Core Architecture** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Environment Variable Management & Precedence

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | get|set|list|validate |
| `var_name` | string | No | Variable name |
| `var_value` | string | No | Variable value |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "variables": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('env-var-management', {
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('env-var-management', {
  action: "value",
  var_name: "value",
  var_value: "value"
});
```

## Security Considerations

Store sensitive vars in ~/.openclaw/credentials/ per Category 8 API Key Management; never log secrets

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
const result = await openclaw.skill.run('env-var-management', { ... });
```

## Related Skills

- `config-schema-validation`
- `secret-rotation`
 * @param {string} params.action - get|set|list|validate
 * @param {string} params.var_name - Variable name
 * @param {string} params.var_value - Variable value
