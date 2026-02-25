---
name: Error Code Classifier
version: 1.0.0
description: Classify errors and map to resolutions from common error database
author: OpenClaw SysAdmin Community
tags: [12, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  error_code:
    type: string
    description: Error code or message
    required: True
  context:
    type: object
    description: Error context
    required: False
output:
  status: string
  details: object
  resolution: string
  severity: string
dependencies:
  - openclaw/logger
  - error-database
security:
  - Validate error inputs; prevent error-based attacks per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Error Code Classifier

## Description

Classify errors and map to resolutions from common error database

## Source Reference

This skill is derived from **12. Diagnostics & Troubleshooting** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Error Code Classification & Resolution Mapping

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `error_code` | string | Yes | Error code or message |
| `context` | object | No | Error context |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "resolution": <string>,
  "severity": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('error-code-classifier', {
  error_code: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('error-code-classifier', {
  error_code: "value",
  context: {}
});
```

## Security Considerations

Validate error inputs; prevent error-based attacks per Category 8

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
const result = await openclaw.skill.run('error-code-classifier', { ... });
```

## Related Skills

- `log-pattern-analysis`
- `stack-trace-analyzer`
 * @param {string} params.error_code - Error code or message
 * @param {Object} params.context - Error context
