---
name: ACP Protocol Manager
version: 1.0.0
description: Manage Agent Communication Protocol with client identification and message routing
author: OpenClaw SysAdmin Community
tags: [3, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  client_info:
    type: object
    description: ACP client info
    required: True
  message:
    type: object
    description: ACP message
    required: True
output:
  status: string
  details: object
  routing_decision: string
dependencies:
  - openclaw/gateway
  - openclaw/logger
security:
  - Validate clientInfo.name fingerprint per Category 8; authenticate ACP clients
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# ACP Protocol Manager

## Description

Manage Agent Communication Protocol with client identification and message routing

## Source Reference

This skill is derived from **3. API Gateway & External Communication** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: ACP Protocol

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `client_info` | object | Yes | ACP client info |
| `message` | object | Yes | ACP message |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "routing_decision": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('acp-protocol-manager', {
  client_info: 123,
  message: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('acp-protocol-manager', {
  client_info: {},
  message: {}
});
```

## Security Considerations

Validate clientInfo.name fingerprint per Category 8; authenticate ACP clients

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
const result = await openclaw.skill.run('acp-protocol-manager', { ... });
```

## Related Skills

- `websocket-server-manager`
- `gateway-status-monitor`
 * @param {Object} params.client_info - ACP client info
 * @param {Object} params.message - ACP message
