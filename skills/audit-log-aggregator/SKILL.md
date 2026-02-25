---
name: Audit Log Aggregator
version: 1.0.0
description: Aggregate security event logs with real-time alerting for anomalies
author: OpenClaw SysAdmin Community
tags: [8, sysadmin, cron]
trigger:
  type: cron
  schedule: "*/5 * * * *"
  enabled: true
input:
  log_sources:
    type: array
    description: Log sources to aggregate
    required: True
  alert_rules:
    type: array
    description: Alert conditions
    required: False
output:
  status: string
  details: object
  events_aggregated: number
dependencies:
  - openclaw/logger
  - openclaw/notify
security:
  - Tamper-proof log storage; secure log transport; retention policies; access controls per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Audit Log Aggregator

## Description

Aggregate security event logs with real-time alerting for anomalies

## Source Reference

This skill is derived from **8. Security & Hardening Matrix** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Audit Log Aggregation & Alerting

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `log_sources` | array | Yes | Log sources to aggregate |
| `alert_rules` | array | No | Alert conditions |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "events_aggregated": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('audit-log-aggregator', {
  log_sources: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('audit-log-aggregator', {
  log_sources: [],
  alert_rules: []
});
```

## Security Considerations

Tamper-proof log storage; secure log transport; retention policies; access controls per Category 8

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
const result = await openclaw.skill.run('audit-log-aggregator', { ... });
```

## Related Skills

- `log-pattern-analysis`
- `security-audit-runner`
 * @param {Array} params.log_sources - Log sources to aggregate
 * @param {Array} params.alert_rules - Alert conditions
