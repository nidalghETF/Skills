---
name: OAuth2/OIDC Flow Manager
version: 1.0.0
description: Implement social login integration with OAuth2 and OpenID Connect
author: OpenClaw SysAdmin Community
tags: [8, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  provider:
    type: string
    description: google|github|microsoft
    required: True
  action:
    type: string
    description: configure|authorize|callback
    required: True
  client_config:
    type: object
    description: OAuth client config
    required: False
output:
  status: string
  details: object
  auth_url: string
dependencies:
  - openclaw/gateway
  - openid-client
security:
  - Use PKCE for public clients; validate state parameter; secure redirect URIs; CSRF protection
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# OAuth2/OIDC Flow Manager

## Description

Implement social login integration with OAuth2 and OpenID Connect

## Source Reference

This skill is derived from **8. Security & Hardening Matrix** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: OAuth2 / OIDC Flow Implementation

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `provider` | string | Yes | google|github|microsoft |
| `action` | string | Yes | configure|authorize|callback |
| `client_config` | object | No | OAuth client config |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "auth_url": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('oauth-oidc-manager', {
  provider: "value",
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('oauth-oidc-manager', {
  provider: "value",
  action: "value",
  client_config: {}
});
```

## Security Considerations

Use PKCE for public clients; validate state parameter; secure redirect URIs; CSRF protection

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
const result = await openclaw.skill.run('oauth-oidc-manager', { ... });
```

## Related Skills

- `jwt-validator`
- `api-key-manager`
 * @param {string} params.provider - google|github|microsoft
 * @param {string} params.action - configure|authorize|callback
 * @param {Object} params.client_config - OAuth client config
