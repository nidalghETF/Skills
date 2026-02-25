---
name: Error Handling & Retry Manager
version: 1.0.0
description: Implement resilient automation with exponential backoff and dead letter queues
author: OpenClaw SysAdmin Community
tags: [10, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  task_id:
    type: string
    description: Failed task ID
    required: True
  retry_policy:
    type: object
    description: Retry configuration
    required: False
  max_retries:
    type: number
    description: Maximum retry attempts
    required: False
output:
  status: string
  details: object
  retry_count: number
dependencies:
  - openclaw/workflow
  - openclaw/notify
security:
  - Audit retry attempts; prevent retry storms; secure dead letter storage per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Error Handling & Retry Manager

## Description

Implement resilient automation with exponential backoff and dead letter queues

## Source Reference

This skill is derived from **10. Automation & Workflow Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Error Handling, Retry Logic & Dead Letter Queues

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `task_id` | string | Yes | Failed task ID |
| `retry_policy` | object | No | Retry configuration |
| `max_retries` | number | No | Maximum retry attempts |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "retry_count": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('error-retry-manager', {
  task_id: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('error-retry-manager', {
  task_id: "value",
  retry_policy: {},
  max_retries: 123
});
```

## Security Considerations

Audit retry attempts; prevent retry storms; secure dead letter storage per Category 8

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
const result = await openclaw.skill.run('error-retry-manager', { ... });
```

## Related Skills

- `workflow-state-machine`
- `parallel-executor`
 * @param {string} params.task_id - Failed task ID
 * @param {Object} params.retry_policy - Retry configuration
 * @param {number} params.max_retries - Maximum retry attempts
