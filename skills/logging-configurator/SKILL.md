---
name: Logging Configurator
version: 1.0.0
description: Configure gateway.log and gateway.err.log locations and rotation
author: OpenClaw SysAdmin Community
tags: [14, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  log_dir:
    type: string
    description: Log directory
    required: True
  log_level:
    type: string
    description: error|warn|info|debug
    required: False
  enable_local_time:
    type: boolean
    description: Use local timestamps
    required: False
output:
  status: string
  details: object
  log_config: object
dependencies:
  - openclaw/fs
  - openclaw/logger
security:
  - Secure log directory; prevent log injection per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Logging Configurator

## Description

Configure gateway.log and gateway.err.log locations and rotation

## Source Reference

This skill is derived from **14. Observability & Telemetry** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Logging Configuration

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `log_dir` | string | Yes | Log directory |
| `log_level` | string | No | error|warn|info|debug |
| `enable_local_time` | boolean | No | Use local timestamps |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "log_config": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('logging-configurator', {
  log_dir: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('logging-configurator', {
  log_dir: "value",
  log_level: "value",
  enable_local_time: true
});
```

## Security Considerations

Secure log directory; prevent log injection per Category 8

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
const result = await openclaw.skill.run('logging-configurator', { ... });
```

## Related Skills

- `structured-logger`
- `log-rotation-manager`
 * @param {string} params.log_dir - Log directory
 * @param {string} params.log_level - error|warn|info|debug
 * @param {boolean} params.enable_local_time - Use local timestamps
