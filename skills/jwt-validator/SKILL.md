---
name: JWT Validator
version: 1.0.0
description: Validate JWT tokens and process claims for authentication
author: OpenClaw SysAdmin Community
tags: [8, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  token:
    type: string
    description: JWT token to validate
    required: True
  secret:
    type: string
    description: JWT secret/key
    required: True
  algorithms:
    type: array
    description: Allowed algorithms
    required: False
output:
  status: string
  details: object
  claims: object
  valid: boolean
dependencies:
  - openclaw/gateway
  - jsonwebtoken
security:
  - Use strong algorithms (RS256/ES256); validate exp/nbf/iss/aud; prevent algorithm confusion
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# JWT Validator

## Description

Validate JWT tokens and process claims for authentication

## Source Reference

This skill is derived from **8. Security & Hardening Matrix** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: JWT Validation & Claims Processing

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `token` | string | Yes | JWT token to validate |
| `secret` | string | Yes | JWT secret/key |
| `algorithms` | array | No | Allowed algorithms |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "claims": <object>,
  "valid": <boolean>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('jwt-validator', {
  token: "value",
  secret: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('jwt-validator', {
  token: "value",
  secret: "value",
  algorithms: []
});
```

## Security Considerations

Use strong algorithms (RS256/ES256); validate exp/nbf/iss/aud; prevent algorithm confusion

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
const result = await openclaw.skill.run('jwt-validator', { ... });
```

## Related Skills

- `oauth-oidc-manager`
- `api-key-manager`
 * @param {string} params.token - JWT token to validate
 * @param {string} params.secret - JWT secret/key
 * @param {Array} params.algorithms - Allowed algorithms
