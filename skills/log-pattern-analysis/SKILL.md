---
name: Log Pattern Analyzer
version: 1.0.0
description: Analyze logs for patterns and detect anomalies automatically
author: OpenClaw SysAdmin Community
tags: [12, sysadmin, cron]
trigger:
  type: cron
  schedule: "*/30 * * * *"
  enabled: true
input:
  log_path:
    type: string
    description: Log file to analyze
    required: True
  pattern_rules:
    type: array
    description: Pattern definitions
    required: False
output:
  status: string
  details: object
  anomalies: array
dependencies:
  - openclaw/logger
  - anomaly-detection
security:
  - Secure log access; prevent log injection; audit analysis per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Log Pattern Analyzer

## Description

Analyze logs for patterns and detect anomalies automatically

## Source Reference

This skill is derived from **12. Diagnostics & Troubleshooting** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Log Pattern Recognition & Anomaly Detection

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `log_path` | string | Yes | Log file to analyze |
| `pattern_rules` | array | No | Pattern definitions |

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
const result = await openclaw.skill.run('log-pattern-analysis', {
  log_path: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('log-pattern-analysis', {
  log_path: "value",
  pattern_rules: []
});
```

## Security Considerations

Secure log access; prevent log injection; audit analysis per Category 8

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
const result = await openclaw.skill.run('log-pattern-analysis', { ... });
```

## Related Skills

- `audit-log-aggregator`
- `error-code-classifier`
 * @param {string} params.log_path - Log file to analyze
 * @param {Array} params.pattern_rules - Pattern definitions
