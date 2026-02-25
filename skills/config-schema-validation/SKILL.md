---
name: Configuration Schema Validation
version: 1.0.0
description: Validate openclaw.json structure and enforce JSON5 parsing rules with hot-reload support
author: OpenClaw SysAdmin Community
tags: [1, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  config_path:
    type: string
    description: Path to openclaw.json
    required: True
  validate_strict:
    type: boolean
    description: Enforce strict schema validation
    required: False
output:
  status: string
  details: object
  errors: array
dependencies:
  - openclaw/fs
  - openclaw/config
  - json5
security:
  - Validate all inputs per Category 8 Input Sanitization; use least privilege for config access
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Configuration Schema Validation

## Description

Validate openclaw.json structure and enforce JSON5 parsing rules with hot-reload support

## Source Reference

This skill is derived from **1. Foundation & Core Architecture** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Configuration Schema Mastery

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `config_path` | string | Yes | Path to openclaw.json |
| `validate_strict` | boolean | No | Enforce strict schema validation |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "errors": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('config-schema-validation', {
  config_path: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('config-schema-validation', {
  config_path: "value",
  validate_strict: true
});
```

## Security Considerations

Validate all inputs per Category 8 Input Sanitization; use least privilege for config access

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
const result = await openclaw.skill.run('config-schema-validation', { ... });
```

## Related Skills

- `env-var-management`
- `runtime-param-optimization`
 * @param {string} params.config_path - Path to openclaw.json
 * @param {boolean} params.validate_strict - Enforce strict schema validation
