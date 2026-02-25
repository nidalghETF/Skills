---
name: Disaster Recovery Manager
version: 1.0.0
description: Manage recovery from failure with automated failover procedures
author: OpenClaw SysAdmin Community
tags: [11, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  recovery_type:
    type: string
    description: backup|failover|restore
    required: True
  backup_source:
    type: string
    description: Backup to restore from
    required: False
  target_instance:
    type: string
    description: Target for failover
    required: False
output:
  status: string
  details: object
  recovery_status: string
dependencies:
  - openclaw/fs
  - openclaw/notify
  - openclaw/gateway
security:
  - Authenticate recovery operations; audit all recovery actions per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Disaster Recovery Manager

## Description

Manage recovery from failure with automated failover procedures

## Source Reference

This skill is derived from **11. Maintenance & Upkeep Operations** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Disaster Recovery Procedures & Failover

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `recovery_type` | string | Yes | backup|failover|restore |
| `backup_source` | string | No | Backup to restore from |
| `target_instance` | string | No | Target for failover |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "recovery_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('disaster-recovery-manager', {
  recovery_type: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('disaster-recovery-manager', {
  recovery_type: "value",
  backup_source: "value",
  target_instance: "value"
});
```

## Security Considerations

Authenticate recovery operations; audit all recovery actions per Category 8

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
const result = await openclaw.skill.run('disaster-recovery-manager', { ... });
```

## Related Skills

- `automated-backup`
- `health-check-automation`
 * @param {string} params.recovery_type - backup|failover|restore
 * @param {string} params.backup_source - Backup to restore from
 * @param {string} params.target_instance - Target for failover
