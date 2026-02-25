---
name: Performance Bottleneck Identifier
version: 1.0.0
description: Identify CPU, I/O, and network performance bottlenecks
author: OpenClaw SysAdmin Community
tags: [12, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  analysis_type:
    type: string
    description: cpu|io|network|all
    required: True
  duration:
    type: number
    description: Analysis duration seconds
    required: False
output:
  status: string
  details: object
  bottlenecks: array
dependencies:
  - openclaw/exec
  - 0x|clinic
security:
  - Secure profiling data; prevent profiling-based attacks per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Performance Bottleneck Identifier

## Description

Identify CPU, I/O, and network performance bottlenecks

## Source Reference

This skill is derived from **12. Diagnostics & Troubleshooting** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Performance Bottleneck Identification

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `analysis_type` | string | Yes | cpu|io|network|all |
| `duration` | number | No | Analysis duration seconds |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "bottlenecks": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('performance-bottleneck-id', {
  analysis_type: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('performance-bottleneck-id', {
  analysis_type: "value",
  duration: 123
});
```

## Security Considerations

Secure profiling data; prevent profiling-based attacks per Category 8

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
const result = await openclaw.skill.run('performance-bottleneck-id', { ... });
```

## Related Skills

- `memory-leak-detector`
- `log-pattern-analysis`
 * @param {string} params.analysis_type - cpu|io|network|all
 * @param {number} params.duration - Analysis duration seconds
