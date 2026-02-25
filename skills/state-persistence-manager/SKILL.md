---
name: State Persistence Manager
version: 1.0.0
description: Manage sessions directory structure (~/.openclaw/sessions/) with integrity checks
author: OpenClaw SysAdmin Community
tags: [1, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  action:
    type: string
    description: backup|restore|verify|cleanup
    required: True
  session_id:
    type: string
    description: Specific session ID
    required: False
output:
  status: string
  details: object
  sessions_affected: number
dependencies:
  - openclaw/fs
  - openclaw/logger
security:
  - Validate session paths to prevent directory traversal per Category 8 input sanitization
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# State Persistence Manager

## Description

Manage sessions directory structure (~/.openclaw/sessions/) with integrity checks

## Source Reference

This skill is derived from **1. Foundation & Core Architecture** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: State Persistence Mechanisms

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | backup|restore|verify|cleanup |
| `session_id` | string | No | Specific session ID |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "sessions_affected": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('state-persistence-manager', {
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('state-persistence-manager', {
  action: "value",
  session_id: "value"
});
```

## Security Considerations

Validate session paths to prevent directory traversal per Category 8 input sanitization

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
const result = await openclaw.skill.run('state-persistence-manager', { ... });
```

## Related Skills

- `automated-backup`
- `session-cleanup`
 * @param {string} params.action - backup|restore|verify|cleanup
 * @param {string} params.session_id - Specific session ID
