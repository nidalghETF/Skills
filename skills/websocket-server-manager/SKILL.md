---
name: WebSocket Server Manager
version: 1.0.0
description: Manage gateway control plane WebSocket server on port 18789 with real-time updates
author: OpenClaw SysAdmin Community
tags: [3, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  action:
    type: string
    description: status|restart|monitor
    required: True
  port:
    type: number
    description: WebSocket port
    required: False
output:
  status: string
  details: object
  connections: number
dependencies:
  - openclaw/gateway
  - ws
security:
  - Validate origin headers; implement authentication per Category 8; connection limits
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# WebSocket Server Manager

## Description

Manage gateway control plane WebSocket server on port 18789 with real-time updates

## Source Reference

This skill is derived from **3. API Gateway & External Communication** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: WebSocket Server Implementation

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | status|restart|monitor |
| `port` | number | No | WebSocket port |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "connections": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('websocket-server-manager', {
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('websocket-server-manager', {
  action: "value",
  port: 123
});
```

## Security Considerations

Validate origin headers; implement authentication per Category 8; connection limits

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
const result = await openclaw.skill.run('websocket-server-manager', { ... });
```

## Related Skills

- `gateway-status-monitor`
- `event-bus-monitor`
 * @param {string} params.action - status|restart|monitor
 * @param {number} params.port - WebSocket port
