---
name: LLM Provider Manager
version: 1.0.0
description: Manage 15+ integrated LLM providers with unified interface and failover
author: OpenClaw SysAdmin Community
tags: [6, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  provider:
    type: string
    description: anthropic|openai|gemini|deepseek|...
    required: True
  action:
    type: string
    description: configure|test|switch
    required: True
  api_key:
    type: string
    description: API key for provider
    required: False
output:
  status: string
  details: object
  provider_status: string
dependencies:
  - openclaw/llm
  - axios
security:
  - Secure API keys in ~/.openclaw/credentials/ per Category 8; key rotation
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# LLM Provider Manager

## Description

Manage 15+ integrated LLM providers with unified interface and failover

## Source Reference

This skill is derived from **6. Model & Inference Federation** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: LLM Provider Abstraction Layer

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `provider` | string | Yes | anthropic|openai|gemini|deepseek|... |
| `action` | string | Yes | configure|test|switch |
| `api_key` | string | No | API key for provider |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "provider_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('llm-provider-manager', {
  provider: "value",
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('llm-provider-manager', {
  provider: "value",
  action: "value",
  api_key: "value"
});
```

## Security Considerations

Secure API keys in ~/.openclaw/credentials/ per Category 8; key rotation

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
const result = await openclaw.skill.run('llm-provider-manager', { ... });
```

## Related Skills

- `model-routing-manager`
- `token-budget-optimizer`
 * @param {string} params.provider - anthropic|openai|gemini|deepseek|...
 * @param {string} params.action - configure|test|switch
 * @param {string} params.api_key - API key for provider
