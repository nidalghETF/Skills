---
name: Access Log Analyzer
version: 1.0.0
description: Analyze access logs for security monitoring and anomaly detection
author: OpenClaw SysAdmin Community
tags: [15, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 */6 * * *"
  enabled: true
input:
  log_source:
    type: string
    description: Access log path
    required: True
  time_window:
    type: string
    description: Analysis window
    required: False
output:
  status: string
  details: object
  anomalies: array
dependencies:
  - openclaw/logger
  - anomaly-detection
security:
  - Secure log access; prevent log tampering; audit analysis per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Access Log Analyzer

## Description

Analyze access logs for security monitoring and anomaly detection

## Source Reference

This skill is derived from **15. Compliance, Governance & Ethics** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Access Log Analysis & Anomaly Detection

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `log_source` | string | Yes | Access log path |
| `time_window` | string | No | Analysis window |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "anomalies": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('access-log-analyzer', {
  log_source: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('access-log-analyzer', {
  log_source: "value",
  time_window: "value"
});
```

## Security Considerations

Secure log access; prevent log tampering; audit analysis per Category 8

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
const result = await openclaw.skill.run('access-log-analyzer', { ... });
```

## Related Skills

- `audit-log-aggregator`
- `pii-detection-redactor`
 * @param {string} params.log_source - Access log path
 * @param {string} params.time_window - Analysis window
