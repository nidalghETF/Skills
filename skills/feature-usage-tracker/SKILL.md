---
name: Feature Usage Tracker
version: 1.0.0
description: Track feature usage with analytics and telemetry
author: OpenClaw SysAdmin Community
tags: [17, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 */6 * * *"
  enabled: true
input:
  time_range:
    type: string
    description: Analysis period
    required: True
  features:
    type: array
    description: Features to track
    required: False
output:
  status: string
  details: object
  usage_stats: object
dependencies:
  - openclaw/metrics
  - analytics
security:
  - Anonymize usage data; secure telemetry per Category 8/15
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Feature Usage Tracker

## Description

Track feature usage with analytics and telemetry

## Source Reference

This skill is derived from **17. Feature Utilization & Capability Discovery** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Feature Usage Analytics & Telemetry

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `time_range` | string | Yes | Analysis period |
| `features` | array | No | Features to track |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "usage_stats": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('feature-usage-tracker', {
  time_range: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('feature-usage-tracker', {
  time_range: "value",
  features: []
});
```

## Security Considerations

Anonymize usage data; secure telemetry per Category 8/15

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
const result = await openclaw.skill.run('feature-usage-tracker', { ... });
```

## Related Skills

- `feature-capability-mapper`
- `metrics-exporter`
 * @param {string} params.time_range - Analysis period
 * @param {Array} params.features - Features to track
