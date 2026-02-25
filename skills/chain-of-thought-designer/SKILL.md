---
name: Chain-of-Thought Template Designer
version: 1.0.0
description: Design reasoning patterns with chain-of-thought prompting
author: OpenClaw SysAdmin Community
tags: [19, sysadmin, chat]
trigger:
  type: chat
  schedule: ""
  enabled: true
input:
  reasoning_type:
    type: string
    description: Type of reasoning
    required: True
  steps:
    type: array
    description: Reasoning steps
    required: False
output:
  status: string
  details: object
  cot_template: string
dependencies:
  - openclaw/llm
  - openclaw/config
security:
  - Validate reasoning chains per Category 8; prevent manipulation
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Chain-of-Thought Template Designer

## Description

Design reasoning patterns with chain-of-thought prompting

## Source Reference

This skill is derived from **19. Prompt Engineering & System Instructions** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Chain-of-Thought Template Design

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reasoning_type` | string | Yes | Type of reasoning |
| `steps` | array | No | Reasoning steps |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "cot_template": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('chain-of-thought-designer', {
  reasoning_type: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('chain-of-thought-designer', {
  reasoning_type: "value",
  steps: []
});
```

## Security Considerations

Validate reasoning chains per Category 8; prevent manipulation

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
const result = await openclaw.skill.run('chain-of-thought-designer', { ... });
```

## Related Skills

- `system-prompt-architect`
- `few-shot-engineer`
 * @param {string} params.reasoning_type - Type of reasoning
 * @param {Array} params.steps - Reasoning steps
