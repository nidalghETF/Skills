---
name: Google Workspace Integrator
version: 1.0.0
description: Integrate with Google Workspace using gog CLI for email and calendar
author: OpenClaw SysAdmin Community
tags: [18, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  service:
    type: string
    description: gmail|calendar|drive
    required: True
  action:
    type: string
    description: Action to perform
    required: True
output:
  status: string
  details: object
  result: any
dependencies:
  - openclaw/exec
  - googleapis
security:
  - Google OAuth security per Category 8; token rotation; scope minimization
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Google Workspace Integrator

## Description

Integrate with Google Workspace using gog CLI for email and calendar

## Source Reference

This skill is derived from **18. Third-Party Ecosystem Integrations** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Integrations (from PRD)

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `service` | string | Yes | gmail|calendar|drive |
| `action` | string | Yes | Action to perform |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "result": <any>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('google-workspace-integrator', {
  service: "value",
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('google-workspace-integrator', {
  service: "value",
  action: "value"
});
```

## Security Considerations

Google OAuth security per Category 8; token rotation; scope minimization

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
const result = await openclaw.skill.run('google-workspace-integrator', { ... });
```

## Related Skills

- `calendar-scheduler`
- `cloud-storage-integrator`
 * @param {string} params.service - gmail|calendar|drive
 * @param {string} params.action - Action to perform
