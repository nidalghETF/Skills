---
name: Provider Configurator
version: 1.0.0
description: Configure all LLM providers: Anthropic, OpenAI, Gemini, DeepSeek, Groq, Together, Mistral, xAI, Fireworks, Ollama, vLLM, Hugging Face
author: OpenClaw SysAdmin Community
tags: [6, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  provider:
    type: string
    description: Provider name
    required: True
  config:
    type: object
    description: Provider configuration
    required: True
output:
  status: string
  details: object
  config_valid: boolean
dependencies:
  - openclaw/config
  - openclaw/llm
security:
  - Encrypt API keys at rest per Category 8; secure credential storage
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Provider Configurator

## Description

Configure all LLM providers: Anthropic, OpenAI, Gemini, DeepSeek, Groq, Together, Mistral, xAI, Fireworks, Ollama, vLLM, Hugging Face

## Source Reference

This skill is derived from **6. Model & Inference Federation** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Provider Configuration

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `provider` | string | Yes | Provider name |
| `config` | object | Yes | Provider configuration |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "config_valid": <boolean>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('provider-configurator', {
  provider: "value",
  config: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('provider-configurator', {
  provider: "value",
  config: {}
});
```

## Security Considerations

Encrypt API keys at rest per Category 8; secure credential storage

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
const result = await openclaw.skill.run('provider-configurator', { ... });
```

## Related Skills

- `llm-provider-manager`
- `secret-rotation`
 * @param {string} params.provider - Provider name
 * @param {Object} params.config - Provider configuration
