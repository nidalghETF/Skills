---
name: Cron Job Runner
version: 1.0.0
description: Execute production cron jobs: daily-sync, fathom-after-meetings, batch-scan
author: OpenClaw SysAdmin Community
tags: [10, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 2 * * *"
  enabled: true
input:
  job_name:
    type: string
    description: daily-sync|fathom|batch-scan
    required: True
  job_params:
    type: object
    description: Job-specific parameters
    required: False
output:
  status: string
  details: object
  job_output: any
dependencies:
  - openclaw/scheduler
  - openclaw/exec
security:
  - Sandbox job execution; validate job parameters; audit all runs per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Cron Job Runner

## Description

Execute production cron jobs: daily-sync, fathom-after-meetings, batch-scan

## Source Reference

This skill is derived from **10. Automation & Workflow Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Cron Jobs

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `job_name` | string | Yes | daily-sync|fathom|batch-scan |
| `job_params` | object | No | Job-specific parameters |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "job_output": <any>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('cron-job-runner', {
  job_name: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('cron-job-runner', {
  job_name: "value",
  job_params: {}
});
```

## Security Considerations

Sandbox job execution; validate job parameters; audit all runs per Category 8

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
const result = await openclaw.skill.run('cron-job-runner', { ... });
```

## Related Skills

- `scheduling-engine`
- `error-retry-manager`
 * @param {string} params.job_name - daily-sync|fathom|batch-scan
 * @param {Object} params.job_params - Job-specific parameters
