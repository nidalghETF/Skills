---
name: Log Rotation Manager
version: 1.0.0
description: Manage log rotation for gateway.log and gateway.err.log
author: OpenClaw SysAdmin Community
tags: [11, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 0 * * *"
  enabled: true
input:
  log_path:
    type: string
    description: Log file path
    required: True
  max_size:
    type: string
    description: Max log size
    required: False
  max_files:
    type: number
    description: Max rotated files
    required: False
output:
  status: string
  details: object
  rotated_files: array
dependencies:
  - openclaw/fs
  - logrotate
security:
  - Secure rotated logs; prevent log tampering; audit log access per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Log Rotation Manager

## Description

Manage log rotation for gateway.log and gateway.err.log

## Source Reference

This skill is derived from **11. Maintenance & Upkeep Operations** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Log Rotation & Aggregation Strategy

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `log_path` | string | Yes | Log file path |
| `max_size` | string | No | Max log size |
| `max_files` | number | No | Max rotated files |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "rotated_files": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('log-rotation-manager', {
  log_path: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('log-rotation-manager', {
  log_path: "value",
  max_size: "value",
  max_files: 123
});
```

## Security Considerations

Secure rotated logs; prevent log tampering; audit log access per Category 8

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
const result = await openclaw.skill.run('log-rotation-manager', { ... });
```

## Related Skills

- `audit-log-aggregator`
- `log-pattern-analysis`
 * @param {string} params.log_path - Log file path
 * @param {string} params.max_size - Max log size
 * @param {number} params.max_files - Max rotated files
