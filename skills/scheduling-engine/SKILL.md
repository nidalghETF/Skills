---
name: Scheduling Engine
version: 1.0.0
description: Manage cron-like scheduling with interval-based task execution
author: OpenClaw SysAdmin Community
tags: [10, sysadmin, cron]
trigger:
  type: cron
  schedule: "* * * * *"
  enabled: true
input:
  task_name:
    type: string
    description: Task identifier
    required: True
  schedule:
    type: string
    description: Cron expression
    required: True
  command:
    type: string
    description: Command to execute
    required: True
output:
  status: string
  details: object
  next_run: string
dependencies:
  - openclaw/scheduler
  - node-cron
security:
  - Validate cron expressions; sandbox task execution; audit scheduled tasks per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Scheduling Engine

## Description

Manage cron-like scheduling with interval-based task execution

## Source Reference

This skill is derived from **10. Automation & Workflow Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Scheduling Engine

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `task_name` | string | Yes | Task identifier |
| `schedule` | string | Yes | Cron expression |
| `command` | string | Yes | Command to execute |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "next_run": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('scheduling-engine', {
  task_name: "value",
  schedule: "value",
  command: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('scheduling-engine', {
  task_name: "value",
  schedule: "value",
  command: "value"
});
```

## Security Considerations

Validate cron expressions; sandbox task execution; audit scheduled tasks per Category 8

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
const result = await openclaw.skill.run('scheduling-engine', { ... });
```

## Related Skills

- `event-trigger-manager`
- `cron-job-runner`
 * @param {string} params.task_name - Task identifier
 * @param {string} params.schedule - Cron expression
 * @param {string} params.command - Command to execute
