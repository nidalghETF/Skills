---
name: Event-Driven Trigger System
version: 1.0.0
description: Configure triggers for file changes, webhooks, and time-based events
author: OpenClaw SysAdmin Community
tags: [10, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  trigger_type:
    type: string
    description: file|webhook|time
    required: True
  condition:
    type: object
    description: Trigger condition
    required: True
  action:
    type: string
    description: Action to execute
    required: True
output:
  status: string
  details: object
  trigger_id: string
dependencies:
  - openclaw/gateway
  - chokidar
security:
  - Validate trigger conditions; prevent event injection; rate limiting per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Event-Driven Trigger System

## Description

Configure triggers for file changes, webhooks, and time-based events

## Source Reference

This skill is derived from **10. Automation & Workflow Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Event-Driven Trigger System

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `trigger_type` | string | Yes | file|webhook|time |
| `condition` | object | Yes | Trigger condition |
| `action` | string | Yes | Action to execute |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "trigger_id": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('event-trigger-manager', {
  trigger_type: "value",
  condition: 123,
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('event-trigger-manager', {
  trigger_type: "value",
  condition: {},
  action: "value"
});
```

## Security Considerations

Validate trigger conditions; prevent event injection; rate limiting per Category 8

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
const result = await openclaw.skill.run('event-trigger-manager', { ... });
```

## Related Skills

- `scheduling-engine`
- `workflow-state-machine`
 * @param {string} params.trigger_type - file|webhook|time
 * @param {Object} params.condition - Trigger condition
 * @param {string} params.action - Action to execute
