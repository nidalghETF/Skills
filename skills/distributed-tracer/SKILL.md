---
name: Distributed Tracer
version: 1.0.0
description: Track request flows across services with distributed tracing
author: OpenClaw SysAdmin Community
tags: [14, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  trace_id:
    type: string
    description: Trace identifier
    required: False
  operation:
    type: string
    description: Operation name
    required: True
output:
  status: string
  details: object
  trace_url: string
dependencies:
  - openclaw/gateway
  - jaeger-client|zipkin
security:
  - Sanitize trace data; prevent PII in traces per Category 8/15
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Distributed Tracer

## Description

Track request flows across services with distributed tracing

## Source Reference

This skill is derived from **14. Observability & Telemetry** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Distributed Tracing

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `trace_id` | string | No | Trace identifier |
| `operation` | string | Yes | Operation name |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "trace_url": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('distributed-tracer', {
  operation: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('distributed-tracer', {
  trace_id: "value",
  operation: "value"
});
```

## Security Considerations

Sanitize trace data; prevent PII in traces per Category 8/15

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
const result = await openclaw.skill.run('distributed-tracer', { ... });
```

## Related Skills

- `metrics-exporter`
- `log-pattern-analysis`
 * @param {string} params.trace_id - Trace identifier
 * @param {string} params.operation - Operation name
