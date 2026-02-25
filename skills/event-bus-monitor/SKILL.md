---
name: Event Bus Monitor
version: 1.0.0
description: Monitor gateway event propagation and message queue health
author: OpenClaw SysAdmin Community
tags: [1, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  event_type:
    type: string
    description: Filter by event type
    required: False
  duration:
    type: number
    description: Monitoring duration in seconds
    required: False
output:
  status: string
  details: object
  events: array
dependencies:
  - openclaw/gateway
  - openclaw/logger
security:
  - Audit sensitive events per Category 8 audit logging requirements
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Event Bus Monitor

## Description

Monitor gateway event propagation and message queue health

## Source Reference

This skill is derived from **1. Foundation & Core Architecture** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Event Bus & Message Queue Internals

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `event_type` | string | No | Filter by event type |
| `duration` | number | No | Monitoring duration in seconds |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "events": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('event-bus-monitor', {
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('event-bus-monitor', {
  event_type: "value",
  duration: 123
});
```

## Security Considerations

Audit sensitive events per Category 8 audit logging requirements

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
const result = await openclaw.skill.run('event-bus-monitor', { ... });
```

## Related Skills

- `gateway-status-monitor`
- `log-pattern-analysis`
 * @param {string} params.event_type - Filter by event type
 * @param {number} params.duration - Monitoring duration in seconds
