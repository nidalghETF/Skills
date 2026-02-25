---
name: Stack Trace Analyzer
version: 1.0.0
description: Analyze stack traces with symbolication for debugging
author: OpenClaw SysAdmin Community
tags: [12, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  stack_trace:
    type: string
    description: Stack trace to analyze
    required: True
  source_maps:
    type: boolean
    description: Use source maps
    required: False
output:
  status: string
  details: object
  symbolicated_trace: string
dependencies:
  - openclaw/logger
  - source-map
security:
  - Secure source map access; prevent information disclosure per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Stack Trace Analyzer

## Description

Analyze stack traces with symbolication for debugging

## Source Reference

This skill is derived from **12. Diagnostics & Troubleshooting** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Stack Trace Analysis & Symbolication

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `stack_trace` | string | Yes | Stack trace to analyze |
| `source_maps` | boolean | No | Use source maps |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "symbolicated_trace": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('stack-trace-analyzer', {
  stack_trace: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('stack-trace-analyzer', {
  stack_trace: "value",
  source_maps: true
});
```

## Security Considerations

Secure source map access; prevent information disclosure per Category 8

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
const result = await openclaw.skill.run('stack-trace-analyzer', { ... });
```

## Related Skills

- `error-code-classifier`
- `root-cause-analyzer`
 * @param {string} params.stack_trace - Stack trace to analyze
 * @param {boolean} params.source_maps - Use source maps
