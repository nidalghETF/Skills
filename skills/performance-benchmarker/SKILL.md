---
name: Performance Benchmark Runner
version: 1.0.0
description: Run latency and throughput benchmarks against defined targets
author: OpenClaw SysAdmin Community
tags: [16, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 3 * * 0"
  enabled: true
input:
  benchmark_suite:
    type: string
    description: Benchmark to run
    required: True
  target_latency:
    type: number
    description: Target latency ms
    required: False
output:
  status: string
  details: object
  benchmark_results: object
dependencies:
  - openclaw/gateway
  - benchmark.js
security:
  - Secure benchmark environment; prevent benchmark-based DoS per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Performance Benchmark Runner

## Description

Run latency and throughput benchmarks against defined targets

## Source Reference

This skill is derived from **16. Best Practices & Pattern Repository** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Performance Benchmark Standards

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `benchmark_suite` | string | Yes | Benchmark to run |
| `target_latency` | number | No | Target latency ms |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "benchmark_results": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('performance-benchmarker', {
  benchmark_suite: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('performance-benchmarker', {
  benchmark_suite: "value",
  target_latency: 123
});
```

## Security Considerations

Secure benchmark environment; prevent benchmark-based DoS per Category 8

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
const result = await openclaw.skill.run('performance-benchmarker', { ... });
```

## Related Skills

- `performance-bottleneck-id`
- `metrics-exporter`
 * @param {string} params.benchmark_suite - Benchmark to run
 * @param {number} params.target_latency - Target latency ms
