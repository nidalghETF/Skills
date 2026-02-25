---
name: API Key Manager
version: 1.0.0
description: Manage API keys in ~/.openclaw/credentials/ with key isolation and scoping
author: OpenClaw SysAdmin Community
tags: [8, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  action:
    type: string
    description: create|revoke|list|scope
    required: True
  key_name:
    type: string
    description: Key identifier
    required: True
  permissions:
    type: array
    description: Key permissions
    required: False
output:
  status: string
  details: object
  key_id: string
dependencies:
  - openclaw/fs
  - crypto
security:
  - Encrypt keys at rest; never log keys; use key isolation; rotate regularly per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# API Key Manager

## Description

Manage API keys in ~/.openclaw/credentials/ with key isolation and scoping

## Source Reference

This skill is derived from **8. Security & Hardening Matrix** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: API Key Management & Scoping

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | create|revoke|list|scope |
| `key_name` | string | Yes | Key identifier |
| `permissions` | array | No | Key permissions |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "key_id": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('api-key-manager', {
  action: "value",
  key_name: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('api-key-manager', {
  action: "value",
  key_name: "value",
  permissions: []
});
```

## Security Considerations

Encrypt keys at rest; never log keys; use key isolation; rotate regularly per Category 8

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
const result = await openclaw.skill.run('api-key-manager', { ... });
```

## Related Skills

- `secret-rotation`
- `jwt-validator`
 * @param {string} params.action - create|revoke|list|scope
 * @param {string} params.key_name - Key identifier
 * @param {Array} params.permissions - Key permissions
