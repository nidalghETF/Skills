---
name: Reverse Proxy Integration
version: 1.0.0
description: Configure Nginx, Caddy, or Traefik as reverse proxy for OpenClaw gateway
author: OpenClaw SysAdmin Community
tags: [2, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  proxy_type:
    type: string
    description: nginx|caddy|traefik
    required: True
  domain:
    type: string
    description: Domain name
    required: True
  enable_ssl:
    type: boolean
    description: Enable SSL/TLS
    required: False
output:
  status: string
  details: object
  config_path: string
dependencies:
  - openclaw/fs
  - nginx|caddy|traefik
security:
  - Enable mTLS where possible per Category 8; validate upstream certificates; rate limiting
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Reverse Proxy Integration

## Description

Configure Nginx, Caddy, or Traefik as reverse proxy for OpenClaw gateway

## Source Reference

This skill is derived from **2. Infrastructure & Deployment Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Reverse Proxy Integration

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `proxy_type` | string | Yes | nginx|caddy|traefik |
| `domain` | string | Yes | Domain name |
| `enable_ssl` | boolean | No | Enable SSL/TLS |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "config_path": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('reverse-proxy-integration', {
  proxy_type: "value",
  domain: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('reverse-proxy-integration', {
  proxy_type: "value",
  domain: "value",
  enable_ssl: true
});
```

## Security Considerations

Enable mTLS where possible per Category 8; validate upstream certificates; rate limiting

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
const result = await openclaw.skill.run('reverse-proxy-integration', { ... });
```

## Related Skills

- `network-topology-design`
- `load-balancing-ha`
 * @param {string} params.proxy_type - nginx|caddy|traefik
 * @param {string} params.domain - Domain name
 * @param {boolean} params.enable_ssl - Enable SSL/TLS
