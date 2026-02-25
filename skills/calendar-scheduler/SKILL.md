---
name: Calendar & Scheduling Integrator
version: 1.0.0
description: Integrate with Google Calendar, Outlook, and CalDAV for scheduling
author: OpenClaw SysAdmin Community
tags: [18, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  provider:
    type: string
    description: google|outlook|caldav
    required: True
  action:
    type: string
    description: create|update|delete|query
    required: True
  event_data:
    type: object
    description: Event details
    required: False
output:
  status: string
  details: object
  event_id: string
dependencies:
  - openclaw/http
  - google-calendar|outlook|calDAV
security:
  - OAuth token security per Category 8; calendar privacy protection
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Calendar & Scheduling Integrator

## Description

Integrate with Google Calendar, Outlook, and CalDAV for scheduling

## Source Reference

This skill is derived from **18. Third-Party Ecosystem Integrations** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Calendar & Scheduling

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `provider` | string | Yes | google|outlook|caldav |
| `action` | string | Yes | create|update|delete|query |
| `event_data` | object | No | Event details |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "event_id": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('calendar-scheduler', {
  provider: "value",
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('calendar-scheduler', {
  provider: "value",
  action: "value",
  event_data: {}
});
```

## Security Considerations

OAuth token security per Category 8; calendar privacy protection

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
const result = await openclaw.skill.run('calendar-scheduler', { ... });
```

## Related Skills

- `cron-job-runner`
- `fathom-meeting-integrator`
 * @param {string} params.provider - google|outlook|caldav
 * @param {string} params.action - create|update|delete|query
 * @param {Object} params.event_data - Event details
