---
name: Model Routing Manager
version: 1.0.0
description: Implement resilient inference chains with automatic fallback and load balancing
author: OpenClaw SysAdmin Community
tags: [6, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  primary_model:
    type: string
    description: Primary model
    required: True
  fallback_models:
    type: array
    description: Fallback model chain
    required: True
  request_payload:
    type: object
    description: LLM request
    required: True
output:
  status: string
  details: object
  model_used: string
dependencies:
  - openclaw/llm
  - openclaw/gateway
security:
  - Validate all model responses per Category 8; consistent security across providers
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Model Routing Manager

## Description

Implement resilient inference chains with automatic fallback and load balancing

## Source Reference

This skill is derived from **6. Model & Inference Federation** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Model Routing, Fallback & Load Balancing Logic

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `primary_model` | string | Yes | Primary model |
| `fallback_models` | array | Yes | Fallback model chain |
| `request_payload` | object | Yes | LLM request |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "model_used": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('model-routing-manager', {
  primary_model: "value",
  fallback_models: 123,
  request_payload: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('model-routing-manager', {
  primary_model: "value",
  fallback_models: [],
  request_payload: {}
});
```

## Security Considerations

Validate all model responses per Category 8; consistent security across providers

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
const result = await openclaw.skill.run('model-routing-manager', { ... });
```

## Related Skills

- `llm-provider-manager`
- `local-model-deployer`
 * @param {string} params.primary_model - Primary model
 * @param {Array} params.fallback_models - Fallback model chain
 * @param {Object} params.request_payload - LLM request
