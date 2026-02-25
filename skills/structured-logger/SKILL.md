---
name: Structured Logger
version: 1.0.0
description: Implement JSON logging with proper log levels and context
author: OpenClaw SysAdmin Community
tags: [14, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  message:
    type: string
    description: Log message
    required: True
  level:
    type: string
    description: error|warn|info|debug
    required: True
  context:
    type: object
    description: Log context
    required: False
output:
  status: string
  details: object
  log_entry: object
dependencies:
  - openclaw/logger
  - pino|winston
security:
  - Never log secrets; sanitize PII per Category 8/15; secure log transport
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Structured Logger

## Description

Implement JSON logging with proper log levels and context

## Source Reference

This skill is derived from **14. Observability & Telemetry** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Structured Logging Best Practices

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `message` | string | Yes | Log message |
| `level` | string | Yes | error|warn|info|debug |
| `context` | object | No | Log context |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "log_entry": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('structured-logger', {
  message: "value",
  level: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('structured-logger', {
  message: "value",
  level: "value",
  context: {}
});
```

## Security Considerations

Never log secrets; sanitize PII per Category 8/15; secure log transport

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
const result = await openclaw.skill.run('structured-logger', { ... });
```

## Related Skills

- `audit-log-aggregator`
- `log-rotation-manager`
 * @param {string} params.message - Log message
 * @param {string} params.level - error|warn|info|debug
 * @param {Object} params.context - Log context
