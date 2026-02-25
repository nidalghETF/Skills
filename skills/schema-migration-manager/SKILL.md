---
name: Schema Migration Manager
version: 1.0.0
description: Manage database versioning and automated schema migrations
author: OpenClaw SysAdmin Community
tags: [9, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  action:
    type: string
    description: migrate|rollback|status|create
    required: True
  target_version:
    type: string
    description: Target migration version
    required: False
output:
  status: string
  details: object
  migrations_applied: array
dependencies:
  - openclaw/db
  - umzug|db-migrate
security:
  - Backup before migration; validate migration scripts; rollback capability per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Schema Migration Manager

## Description

Manage database versioning and automated schema migrations

## Source Reference

This skill is derived from **9. Data Persistence & Knowledge Management** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Schema Migrations & Evolution

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | migrate|rollback|status|create |
| `target_version` | string | No | Target migration version |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "migrations_applied": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('schema-migration-manager', {
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('schema-migration-manager', {
  action: "value",
  target_version: "value"
});
```

## Security Considerations

Backup before migration; validate migration scripts; rollback capability per Category 8

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
const result = await openclaw.skill.run('schema-migration-manager', { ... });
```

## Related Skills

- `database-adapter-manager`
- `automated-backup`
 * @param {string} params.action - migrate|rollback|status|create
 * @param {string} params.target_version - Target migration version
