---
name: Webhook Ingestion Manager
version: 1.0.0
description: Manage incoming webhooks with signature verification and secure processing
author: OpenClaw SysAdmin Community
tags: [3, sysadmin, webhook]
trigger:
  type: webhook
  schedule: ""
  enabled: true
input:
  webhook_payload:
    type: object
    description: Webhook payload
    required: True
  signature:
    type: string
    description: Webhook signature
    required: True
  secret:
    type: string
    description: Webhook secret
    required: True
output:
  status: string
  details: object
  verified: boolean
dependencies:
  - openclaw/gateway
  - crypto
security:
  - Mandatory signature verification per Category 8; constant-time comparison; replay attack prevention
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Webhook Ingestion Manager

## Description

Manage incoming webhooks with signature verification and secure processing

## Source Reference

This skill is derived from **3. API Gateway & External Communication** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Webhook Ingestion & Signature Verification

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `webhook_payload` | object | Yes | Webhook payload |
| `signature` | string | Yes | Webhook signature |
| `secret` | string | Yes | Webhook secret |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "verified": <boolean>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('webhook-manager', {
  webhook_payload: 123,
  signature: "value",
  secret: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('webhook-manager', {
  webhook_payload: {},
  signature: "value",
  secret: "value"
});
```

## Security Considerations

Mandatory signature verification per Category 8; constant-time comparison; replay attack prevention

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
const result = await openclaw.skill.run('webhook-manager', { ... });
```

## Related Skills

- `rest-api-manager`
- `input-sanitization-filter`
 * @param {Object} params.webhook_payload - Webhook payload
 * @param {string} params.signature - Webhook signature
 * @param {string} params.secret - Webhook secret
