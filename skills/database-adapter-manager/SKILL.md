---
name: Database Adapter Manager
version: 1.0.0
description: Manage SQLite with WAL mode, foreign keys, and connection pooling
author: OpenClaw SysAdmin Community
tags: [9, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  action:
    type: string
    description: connect|optimize|backup|vacuum
    required: True
  db_path:
    type: string
    description: Database file path
    required: True
output:
  status: string
  details: object
  connection_pool: object
dependencies:
  - openclaw/db
  - sqlite3
security:
  - Parameterized queries only; connection limits; backup encryption per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Database Adapter Manager

## Description

Manage SQLite with WAL mode, foreign keys, and connection pooling

## Source Reference

This skill is derived from **9. Data Persistence & Knowledge Management** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Database Adapters

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | connect|optimize|backup|vacuum |
| `db_path` | string | Yes | Database file path |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "connection_pool": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('database-adapter-manager', {
  action: "value",
  db_path: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('database-adapter-manager', {
  action: "value",
  db_path: "value"
});
```

## Security Considerations

Parameterized queries only; connection limits; backup encryption per Category 8

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
const result = await openclaw.skill.run('database-adapter-manager', { ... });
```

## Related Skills

- `schema-migration-manager`
- `vector-store-manager`
 * @param {string} params.action - connect|optimize|backup|vacuum
 * @param {string} params.db_path - Database file path
