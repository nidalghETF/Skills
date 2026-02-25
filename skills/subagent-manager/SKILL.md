---
name: Subagent Manager
version: 1.0.0
description: Manage subagents with max concurrent: 8 production setting and fallback chains
author: OpenClaw SysAdmin Community
tags: [21, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  max_concurrent:
    type: number
    description: Max concurrent subagents
    required: False
  primary_model:
    type: string
    description: Subagent model
    required: False
  fallback_chain:
    type: array
    description: Fallback models
    required: False
output:
  status: string
  details: object
  subagent_config: object
dependencies:
  - openclaw/gateway
  - openclaw/llm
security:
  - Subagent isolation per Category 8; resource limits; secure fallback chain
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Subagent Manager

## Description

Manage subagents with max concurrent: 8 production setting and fallback chains

## Source Reference

This skill is derived from **21. Multi-Agent Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Subagent Management

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `max_concurrent` | number | No | Max concurrent subagents |
| `primary_model` | string | No | Subagent model |
| `fallback_chain` | array | No | Fallback models |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "subagent_config": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('subagent-manager', {
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('subagent-manager', {
  max_concurrent: 123,
  primary_model: "value",
  fallback_chain: []
});
```

## Security Considerations

Subagent isolation per Category 8; resource limits; secure fallback chain

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
const result = await openclaw.skill.run('subagent-manager', { ... });
```

## Related Skills

- `hierarchical-agent-manager`
- `model-routing-manager`
 * @param {number} params.max_concurrent - Max concurrent subagents
 * @param {string} params.primary_model - Subagent model
 * @param {Array} params.fallback_chain - Fallback models
