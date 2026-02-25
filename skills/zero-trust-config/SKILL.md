---
name: Zero-Trust Configurator
version: 1.0.0
description: Configure mTLS and service mesh for zero-trust security
author: OpenClaw SysAdmin Community
tags: [8, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  enable_mtls:
    type: boolean
    description: Enable mutual TLS
    required: True
  service_mesh:
    type: string
    description: istio|linkerd|none
    required: False
output:
  status: string
  details: object
  zero_trust_status: object
dependencies:
  - openclaw/gateway
  - cert-manager
  - istio|linkerd
security:
  - mTLS everywhere; service identity; least privilege per request; continuous verification per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Zero-Trust Configurator

## Description

Configure mTLS and service mesh for zero-trust security

## Source Reference

This skill is derived from **8. Security & Hardening Matrix** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Zero-Trust Architecture

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `enable_mtls` | boolean | Yes | Enable mutual TLS |
| `service_mesh` | string | No | istio|linkerd|none |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "zero_trust_status": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('zero-trust-config', {
  enable_mtls: true
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('zero-trust-config', {
  enable_mtls: true,
  service_mesh: "value"
});
```

## Security Considerations

mTLS everywhere; service identity; least privilege per request; continuous verification per Category 8

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
const result = await openclaw.skill.run('zero-trust-config', { ... });
```

## Related Skills

- `threat-model-analyzer`
- `jwt-validator`
 * @param {boolean} params.enable_mtls - Enable mutual TLS
 * @param {string} params.service_mesh - istio|linkerd|none
