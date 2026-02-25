---
name: Automated Backup Scheduler
version: 1.0.0
description: Schedule and verify backups with sync.py backup system
author: OpenClaw SysAdmin Community
tags: [11, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 */6 * * *"
  enabled: true
input:
  backup_paths:
    type: array
    description: Paths to backup
    required: True
  destination:
    type: string
    description: Backup destination
    required: True
  verify:
    type: boolean
    description: Verify backup integrity
    required: False
output:
  status: string
  details: object
  backup_path: string
  verified: boolean
dependencies:
  - openclaw/fs
  - openclaw/notify
  - tar
security:
  - Encrypt backups at rest; secure backup transport; access controls per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Automated Backup Scheduler

## Description

Schedule and verify backups with sync.py backup system

## Source Reference

This skill is derived from **11. Maintenance & Upkeep Operations** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Automated Backup Scheduling & Verification

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `backup_paths` | array | Yes | Paths to backup |
| `destination` | string | Yes | Backup destination |
| `verify` | boolean | No | Verify backup integrity |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "backup_path": <string>,
  "verified": <boolean>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('automated-backup', {
  backup_paths: 123,
  destination: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('automated-backup', {
  backup_paths: [],
  destination: "value",
  verify: true
});
```

## Security Considerations

Encrypt backups at rest; secure backup transport; access controls per Category 8

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
const result = await openclaw.skill.run('automated-backup', { ... });
```

## Related Skills

- `disaster-recovery-manager`
- `hf-dataset-persistence`
 * @param {Array} params.backup_paths - Paths to backup
 * @param {string} params.destination - Backup destination
 * @param {boolean} params.verify - Verify backup integrity
