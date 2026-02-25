---
name: Heartbeat Configurator
version: 1.0.0
description: Configure uptime monitoring with heartbeat endpoints (1 hour interval)
author: OpenClaw SysAdmin Community
tags: [14, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  interval:
    type: number
    description: Heartbeat interval seconds
    required: False
  endpoints:
    type: array
    description: Endpoints to monitor
    required: True
output:
  status: string
  details: object
  heartbeat_status: string
dependencies:
  - openclaw/gateway
  - openclaw/notify
security:
  - Secure heartbeat endpoints; prevent heartbeat spoofing per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Heartbeat Configurator

## Description

Configure uptime monitoring with heartbeat endpoints (1 hour interval)

## Source Reference

This skill is derived from **14. Observability & Telemetry** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Heartbeat Endpoint Configuration

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `interval` | number | No | Heartbeat interval seconds |
| `endpoints` | array | Yes | Endpoints to monitor |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "heartbeat_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('heartbeat-configurator', {
  endpoints: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('heartbeat-configurator', {
  interval: 123,
  endpoints: []
});
```

## Security Considerations

Secure heartbeat endpoints; prevent heartbeat spoofing per Category 8

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
const result = await openclaw.skill.run('heartbeat-configurator', { ... });
```

## Related Skills

- `health-check-automation`
- `synthetic-monitor`
 * @param {number} params.interval - Heartbeat interval seconds
 * @param {Array} params.endpoints - Endpoints to monitor
