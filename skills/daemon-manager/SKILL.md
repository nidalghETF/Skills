---
name: Daemon Manager
version: 1.0.0
description: Manage OpenClaw daemon via launchd (macOS) or systemd (Linux) with auto-start configuration
author: OpenClaw SysAdmin Community
tags: [1, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  action:
    type: string
    description: start|stop|restart|status|enable|disable
    required: True
  platform:
    type: string
    description: auto|macos|linux
    required: False
output:
  status: string
  details: object
  daemon_status: string
dependencies:
  - openclaw/exec
  - openclaw/notify
security:
  - Use least privilege for daemon operations; validate service file paths
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Daemon Manager

## Description

Manage OpenClaw daemon via launchd (macOS) or systemd (Linux) with auto-start configuration

## Source Reference

This skill is derived from **1. Foundation & Core Architecture** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Daemon Management

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | start|stop|restart|status|enable|disable |
| `platform` | string | No | auto|macos|linux |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "daemon_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('daemon-manager', {
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('daemon-manager', {
  action: "value",
  platform: "value"
});
```

## Security Considerations

Use least privilege for daemon operations; validate service file paths

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
const result = await openclaw.skill.run('daemon-manager', { ... });
```

## Related Skills

- `health-check-automation`
- `gateway-status-monitor`
 * @param {string} params.action - start|stop|restart|status|enable|disable
 * @param {string} params.platform - auto|macos|linux
