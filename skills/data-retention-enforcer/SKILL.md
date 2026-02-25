---
name: Data Retention Policy Enforcer
version: 1.0.0
description: Automate data lifecycle management with retention policy enforcement
author: OpenClaw SysAdmin Community
tags: [15, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 2 * * *"
  enabled: true
input:
  data_type:
    type: string
    description: Type of data
    required: True
  retention_period:
    type: number
    description: Days to retain
    required: True
output:
  status: string
  details: object
  items_deleted: number
dependencies:
  - openclaw/db
  - openclaw/fs
security:
  - Audit all deletions; secure deletion methods; compliance verification per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Data Retention Policy Enforcer

## Description

Automate data lifecycle management with retention policy enforcement

## Source Reference

This skill is derived from **15. Compliance, Governance & Ethics** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Data Retention Policy Enforcement

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `data_type` | string | Yes | Type of data |
| `retention_period` | number | Yes | Days to retain |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "items_deleted": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('data-retention-enforcer', {
  data_type: "value",
  retention_period: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('data-retention-enforcer', {
  data_type: "value",
  retention_period: 123
});
```

## Security Considerations

Audit all deletions; secure deletion methods; compliance verification per Category 8

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
const result = await openclaw.skill.run('data-retention-enforcer', { ... });
```

## Related Skills

- `data-archival-manager`
- `pii-detection-redactor`
 * @param {string} params.data_type - Type of data
 * @param {number} params.retention_period - Days to retain
