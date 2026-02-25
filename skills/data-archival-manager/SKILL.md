---
name: Data Archival Manager
version: 1.0.0
description: Manage retention policies with automated archival and purging
author: OpenClaw SysAdmin Community
tags: [11, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 1 * * 0"
  enabled: true
input:
  data_type:
    type: string
    description: logs|sessions|conversations
    required: True
  retention_days:
    type: number
    description: Retention period
    required: True
  archive_before_delete:
    type: boolean
    description: Archive before purge
    required: False
output:
  status: string
  details: object
  items_archived: number
  items_purged: number
dependencies:
  - openclaw/db
  - openclaw/fs
security:
  - Secure archival storage; audit purging; compliance retention per Category 8/15
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Data Archival Manager

## Description

Manage retention policies with automated archival and purging

## Source Reference

This skill is derived from **11. Maintenance & Upkeep Operations** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Data Archival & Purging Policies

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `data_type` | string | Yes | logs|sessions|conversations |
| `retention_days` | number | Yes | Retention period |
| `archive_before_delete` | boolean | No | Archive before purge |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "items_archived": <number>,
  "items_purged": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('data-archival-manager', {
  data_type: "value",
  retention_days: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('data-archival-manager', {
  data_type: "value",
  retention_days: 123,
  archive_before_delete: true
});
```

## Security Considerations

Secure archival storage; audit purging; compliance retention per Category 8/15

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
const result = await openclaw.skill.run('data-archival-manager', { ... });
```

## Related Skills

- `automated-backup`
- `conversation-compactor`
 * @param {string} params.data_type - logs|sessions|conversations
 * @param {number} params.retention_days - Retention period
 * @param {boolean} params.archive_before_delete - Archive before purge
