---
name: ARM Architecture Optimizer
version: 1.0.0
description: Optimize for Raspberry Pi and ARM64 devices with reduced resource footprint
author: OpenClaw SysAdmin Community
tags: [22, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  device_type:
    type: string
    description: raspberrypi|arm64|jetson
    required: True
  optimization_level:
    type: string
    description: size|speed|balanced
    required: False
output:
  status: string
  details: object
  optimized_config: object
dependencies:
  - openclaw/exec
  - arm-compiler
security:
  - ARM device security per Category 8; secure boot; hardware encryption
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# ARM Architecture Optimizer

## Description

Optimize for Raspberry Pi and ARM64 devices with reduced resource footprint

## Source Reference

This skill is derived from **22. Edge & IoT Deployment** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: ARM Architecture Optimization

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `device_type` | string | Yes | raspberrypi|arm64|jetson |
| `optimization_level` | string | No | size|speed|balanced |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "optimized_config": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('arm-optimizer', {
  device_type: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('arm-optimizer', {
  device_type: "value",
  optimization_level: "value"
});
```

## Security Considerations

ARM device security per Category 8; secure boot; hardware encryption

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
const result = await openclaw.skill.run('arm-optimizer', { ... });
```

## Related Skills

- `local-model-deployer`
- `offline-first-architect`
 * @param {string} params.device_type - raspberrypi|arm64|jetson
 * @param {string} params.optimization_level - size|speed|balanced
