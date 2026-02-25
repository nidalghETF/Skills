---
name: Edge AI Gateway Configurator
version: 1.0.0
description: Configure industrial edge gateways for AI inference at the edge
author: OpenClaw SysAdmin Community
tags: [22, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  gateway_model:
    type: string
    description: Gateway hardware model
    required: True
  inference_model:
    type: string
    description: Model to deploy
    required: True
  edge_endpoints:
    type: array
    description: Connected edge devices
    required: False
output:
  status: string
  details: object
  gateway_status: string
dependencies:
  - openclaw/gateway
  - edge-ai-runtime
security:
  - Edge gateway security per Category 8; secure boot; encrypted inference
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Edge AI Gateway Configurator

## Description

Configure industrial edge gateways for AI inference at the edge

## Source Reference

This skill is derived from **22. Edge & IoT Deployment** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Edge AI Gateway Configuration

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `gateway_model` | string | Yes | Gateway hardware model |
| `inference_model` | string | Yes | Model to deploy |
| `edge_endpoints` | array | No | Connected edge devices |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "gateway_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('edge-ai-gateway', {
  gateway_model: "value",
  inference_model: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('edge-ai-gateway', {
  gateway_model: "value",
  inference_model: "value",
  edge_endpoints: []
});
```

## Security Considerations

Edge gateway security per Category 8; secure boot; encrypted inference

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
const result = await openclaw.skill.run('edge-ai-gateway', { ... });
```

## Related Skills

- `arm-optimizer`
- `offline-first-architect`
 * @param {string} params.gateway_model - Gateway hardware model
 * @param {string} params.inference_model - Model to deploy
 * @param {Array} params.edge_endpoints - Connected edge devices
