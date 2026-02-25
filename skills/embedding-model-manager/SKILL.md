---
name: Embedding Model Operations
version: 1.0.0
description: Manage vectorization with Google gemini-embedding-001 (768-dim) standard
author: OpenClaw SysAdmin Community
tags: [6, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  texts:
    type: array
    description: Texts to embed
    required: True
  model:
    type: string
    description: Embedding model
    required: False
output:
  status: string
  details: object
  embeddings: array
dependencies:
  - openclaw/llm
  - openclaw/vector
security:
  - Validate text input per Category 8; embedding inversion attack prevention
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Embedding Model Operations

## Description

Manage vectorization with Google gemini-embedding-001 (768-dim) standard

## Source Reference

This skill is derived from **6. Model & Inference Federation** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Embedding Model Operations

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `texts` | array | Yes | Texts to embed |
| `model` | string | No | Embedding model |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "embeddings": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('embedding-model-manager', {
  texts: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('embedding-model-manager', {
  texts: [],
  model: "value"
});
```

## Security Considerations

Validate text input per Category 8; embedding inversion attack prevention

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
const result = await openclaw.skill.run('embedding-model-manager', { ... });
```

## Related Skills

- `vector-store-manager`
- `embedding-cache-manager`
 * @param {Array} params.texts - Texts to embed
 * @param {string} params.model - Embedding model
