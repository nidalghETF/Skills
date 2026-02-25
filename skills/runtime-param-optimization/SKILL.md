---
name: Runtime Parameter Optimization
version: 1.0.0
description: Optimize CLI flags (--port, --bind, --config, --data-dir) for performance and security
author: OpenClaw SysAdmin Community
tags: [1, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  port:
    type: number
    description: Gateway port
    required: False
  bind_address:
    type: string
    description: Bind address
    required: False
  data_dir:
    type: string
    description: Data directory path
    required: False
output:
  status: string
  details: object
  recommendations: array
dependencies:
  - openclaw/exec
  - openclaw/config
security:
  - Use non-privileged ports (>1024); bind to loopback for local-only per Category 8 hardening
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Runtime Parameter Optimization

## Description

Optimize CLI flags (--port, --bind, --config, --data-dir) for performance and security

## Source Reference

This skill is derived from **1. Foundation & Core Architecture** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Runtime Parameter Optimization

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `port` | number | No | Gateway port |
| `bind_address` | string | No | Bind address |
| `data_dir` | string | No | Data directory path |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "recommendations": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('runtime-param-optimization', {
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('runtime-param-optimization', {
  port: 123,
  bind_address: "value",
  data_dir: "value"
});
```

## Security Considerations

Use non-privileged ports (>1024); bind to loopback for local-only per Category 8 hardening

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
const result = await openclaw.skill.run('runtime-param-optimization', { ... });
```

## Related Skills

- `config-schema-validation`
- `gateway-status-monitor`
 * @param {number} params.port - Gateway port
 * @param {string} params.bind_address - Bind address
 * @param {string} params.data_dir - Data directory path
