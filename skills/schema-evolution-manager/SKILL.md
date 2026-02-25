---
name: Database Schema Evolution Manager
version: 1.0.0
description: Manage data migration during schema evolution
author: OpenClaw SysAdmin Community
tags: [13, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  migration_name:
    type: string
    description: Migration to run
    required: True
  direction:
    type: string
    description: up|down
    required: True
output:
  status: string
  details: object
  migration_result: string
dependencies:
  - openclaw/db
  - umzug
security:
  - Backup before evolution; audit schema changes per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Database Schema Evolution Manager

## Description

Manage data migration during schema evolution

## Source Reference

This skill is derived from **13. Upgrade & Lifecycle Management** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Database Schema Evolution Tools

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `migration_name` | string | Yes | Migration to run |
| `direction` | string | Yes | up|down |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "migration_result": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('schema-evolution-manager', {
  migration_name: "value",
  direction: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('schema-evolution-manager', {
  migration_name: "value",
  direction: "value"
});
```

## Security Considerations

Backup before evolution; audit schema changes per Category 8

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
const result = await openclaw.skill.run('schema-evolution-manager', { ... });
```

## Related Skills

- `schema-migration-manager`
- `config-migration-runner`
 * @param {string} params.migration_name - Migration to run
 * @param {string} params.direction - up|down
