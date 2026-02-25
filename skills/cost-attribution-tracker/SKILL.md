---
name: Cost Attribution Tracker
version: 1.0.0
description: Track token usage and cost analysis for budget management
author: OpenClaw SysAdmin Community
tags: [14, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 */6 * * *"
  enabled: true
input:
  time_range:
    type: string
    description: Analysis period
    required: True
  group_by:
    type: string
    description: agent|model|skill
    required: False
output:
  status: string
  details: object
  cost_breakdown: object
dependencies:
  - openclaw/llm
  - openclaw/metrics
security:
  - Secure cost data; audit cost tracking per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Cost Attribution Tracker

## Description

Track token usage and cost analysis for budget management

## Source Reference

This skill is derived from **14. Observability & Telemetry** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Cost Attribution & Resource Usage Analytics

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `time_range` | string | Yes | Analysis period |
| `group_by` | string | No | agent|model|skill |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "cost_breakdown": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('cost-attribution-tracker', {
  time_range: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('cost-attribution-tracker', {
  time_range: "value",
  group_by: "value"
});
```

## Security Considerations

Secure cost data; audit cost tracking per Category 8

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
const result = await openclaw.skill.run('cost-attribution-tracker', { ... });
```

## Related Skills

- `token-budget-optimizer`
- `metrics-exporter`
 * @param {string} params.time_range - Analysis period
 * @param {string} params.group_by - agent|model|skill
