---
name: Disk Space Monitor
version: 1.0.0
description: Monitor capacity with alerting for disk space and inode exhaustion
author: OpenClaw SysAdmin Community
tags: [11, sysadmin, cron]
trigger:
  type: cron
  schedule: "*/15 * * * *"
  enabled: true
input:
  mount_point:
    type: string
    description: Mount to monitor
    required: True
  warning_threshold:
    type: number
    description: Warning %
    required: False
  critical_threshold:
    type: number
    description: Critical %
    required: False
output:
  status: string
  details: object
  usage_percent: number
dependencies:
  - openclaw/exec
  - openclaw/notify
security:
  - Alert on unusual disk growth (potential attack); secure monitoring per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Disk Space Monitor

## Description

Monitor capacity with alerting for disk space and inode exhaustion

## Source Reference

This skill is derived from **11. Maintenance & Upkeep Operations** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Disk Space & Inode Monitoring

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `mount_point` | string | Yes | Mount to monitor |
| `warning_threshold` | number | No | Warning % |
| `critical_threshold` | number | No | Critical % |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "usage_percent": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('disk-space-monitor', {
  mount_point: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('disk-space-monitor', {
  mount_point: "value",
  warning_threshold: 123,
  critical_threshold: 123
});
```

## Security Considerations

Alert on unusual disk growth (potential attack); secure monitoring per Category 8

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
const result = await openclaw.skill.run('disk-space-monitor', { ... });
```

## Related Skills

- `resource-cleanup-automation`
- `health-check-automation`
 * @param {string} params.mount_point - Mount to monitor
 * @param {number} params.warning_threshold - Warning %
 * @param {number} params.critical_threshold - Critical %
