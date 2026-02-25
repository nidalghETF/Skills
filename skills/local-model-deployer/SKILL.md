---
name: Local Model Deployer
version: 1.0.0
description: Deploy and manage Ollama, vLLM for local inference with resource optimization
author: OpenClaw SysAdmin Community
tags: [6, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  model_name:
    type: string
    description: Model to deploy
    required: True
  backend:
    type: string
    description: ollama|vllm
    required: True
  gpu_layers:
    type: number
    description: GPU layers to use
    required: False
output:
  status: string
  details: object
  endpoint: string
dependencies:
  - openclaw/exec
  - ollama|vllm
security:
  - Local inference preferred per Category 8 privacy; validate model integrity
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Local Model Deployer

## Description

Deploy and manage Ollama, vLLM for local inference with resource optimization

## Source Reference

This skill is derived from **6. Model & Inference Federation** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Local Model Deployment

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `model_name` | string | Yes | Model to deploy |
| `backend` | string | Yes | ollama|vllm |
| `gpu_layers` | number | No | GPU layers to use |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "endpoint": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('local-model-deployer', {
  model_name: "value",
  backend: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('local-model-deployer', {
  model_name: "value",
  backend: "value",
  gpu_layers: 123
});
```

## Security Considerations

Local inference preferred per Category 8 privacy; validate model integrity

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
const result = await openclaw.skill.run('local-model-deployer', { ... });
```

## Related Skills

- `llm-provider-manager`
- `model-routing-manager`
 * @param {string} params.model_name - Model to deploy
 * @param {string} params.backend - ollama|vllm
 * @param {number} params.gpu_layers - GPU layers to use
