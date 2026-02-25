---
name: Memory Leak Detector
version: 1.0.0
description: Detect memory leaks with profiling and heap analysis
author: OpenClaw SysAdmin Community
tags: [12, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 */6 * * *"
  enabled: true
input:
  process_id:
    type: number
    description: Process to analyze
    required: False
  heap_growth_threshold:
    type: number
    description: Growth threshold %
    required: False
output:
  status: string
  details: object
  leak_detected: boolean
  heap_stats: object
dependencies:
  - openclaw/exec
  - heapdump
  - clinic
security:
  - Secure heap dump storage; prevent memory dump exposure per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Memory Leak Detector

## Description

Detect memory leaks with profiling and heap analysis

## Source Reference

This skill is derived from **12. Diagnostics & Troubleshooting** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Memory Leak Detection

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `process_id` | number | No | Process to analyze |
| `heap_growth_threshold` | number | No | Growth threshold % |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "leak_detected": <boolean>,
  "heap_stats": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('memory-leak-detector', {
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('memory-leak-detector', {
  process_id: 123,
  heap_growth_threshold: 123
});
```

## Security Considerations

Secure heap dump storage; prevent memory dump exposure per Category 8

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
const result = await openclaw.skill.run('memory-leak-detector', { ... });
```

## Related Skills

- `garbage-collection-tuner`
- `performance-bottleneck-id`
 * @param {number} params.process_id - Process to analyze
 * @param {number} params.heap_growth_threshold - Growth threshold %
