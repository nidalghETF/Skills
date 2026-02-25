---
name: Synthetic Transaction Monitor
version: 1.0.0
description: Automate health checks with synthetic transaction testing
author: OpenClaw SysAdmin Community
tags: [14, sysadmin, cron]
trigger:
  type: cron
  schedule: "*/5 * * * *"
  enabled: true
input:
  endpoint:
    type: string
    description: Endpoint to test
    required: True
  test_scenario:
    type: string
    description: Test scenario name
    required: True
output:
  status: string
  details: object
  test_result: object
dependencies:
  - openclaw/gateway
  - axios
security:
  - Secure test credentials; prevent synthetic test abuse per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Synthetic Transaction Monitor

## Description

Automate health checks with synthetic transaction testing

## Source Reference

This skill is derived from **14. Observability & Telemetry** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Synthetic Transaction Monitoring

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `endpoint` | string | Yes | Endpoint to test |
| `test_scenario` | string | Yes | Test scenario name |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "test_result": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('synthetic-monitor', {
  endpoint: "value",
  test_scenario: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('synthetic-monitor', {
  endpoint: "value",
  test_scenario: "value"
});
```

## Security Considerations

Secure test credentials; prevent synthetic test abuse per Category 8

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
const result = await openclaw.skill.run('synthetic-monitor', { ... });
```

## Related Skills

- `health-check-automation`
- `monitoring-stack-integrator`
 * @param {string} params.endpoint - Endpoint to test
 * @param {string} params.test_scenario - Test scenario name
