---
name: Health Check & Self-Healing Automation
version: 1.0.0
description: Implement heartbeat monitoring with auto-restart on failure detection
author: OpenClaw SysAdmin Community
tags: [2, sysadmin, cron]
trigger:
  type: cron
  schedule: "*/5 * * * *"
  enabled: true
input:
  check_interval:
    type: number
    description: Check interval in seconds
    required: False
  auto_heal:
    type: boolean
    description: Enable auto-restart
    required: False
  alert_on_failure:
    type: boolean
    description: Send alerts on failure
    required: False
output:
  status: string
  details: object
  health_status: string
dependencies:
  - openclaw/gateway
  - openclaw/notify
  - openclaw/exec
security:
  - Validate health endpoint responses; prevent health check amplification attacks
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Health Check & Self-Healing Automation

## Description

Implement heartbeat monitoring with auto-restart on failure detection

## Source Reference

This skill is derived from **2. Infrastructure & Deployment Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Health Check & Self-Healing Automation

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `check_interval` | number | No | Check interval in seconds |
| `auto_heal` | boolean | No | Enable auto-restart |
| `alert_on_failure` | boolean | No | Send alerts on failure |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "health_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('health-check-automation', {
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('health-check-automation', {
  check_interval: 123,
  auto_heal: true,
  alert_on_failure: true
});
```

## Security Considerations

Validate health endpoint responses; prevent health check amplification attacks

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
const result = await openclaw.skill.run('health-check-automation', { ... });
```

## Related Skills

- `daemon-manager`
- `gateway-status-monitor`
 * @param {number} params.check_interval - Check interval in seconds
 * @param {boolean} params.auto_heal - Enable auto-restart
 * @param {boolean} params.alert_on_failure - Send alerts on failure
