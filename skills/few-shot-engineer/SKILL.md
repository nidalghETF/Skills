---
name: Few-Shot Example Engineer
version: 1.0.0
description: Create effective few-shot examples for improved LLM performance
author: OpenClaw SysAdmin Community
tags: [19, sysadmin, chat]
trigger:
  type: chat
  schedule: ""
  enabled: true
input:
  task_description:
    type: string
    description: Task to exemplify
    required: True
  num_examples:
    type: number
    description: Number of examples
    required: False
output:
  status: string
  details: object
  few_shot_prompt: string
dependencies:
  - openclaw/llm
  - openclaw/config
security:
  - Sanitize examples per Category 8; prevent example-based attacks
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Few-Shot Example Engineer

## Description

Create effective few-shot examples for improved LLM performance

## Source Reference

This skill is derived from **19. Prompt Engineering & System Instructions** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Few-shot Example Engineering

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `task_description` | string | Yes | Task to exemplify |
| `num_examples` | number | No | Number of examples |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "few_shot_prompt": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('few-shot-engineer', {
  task_description: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('few-shot-engineer', {
  task_description: "value",
  num_examples: 123
});
```

## Security Considerations

Sanitize examples per Category 8; prevent example-based attacks

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
const result = await openclaw.skill.run('few-shot-engineer', { ... });
```

## Related Skills

- `system-prompt-architect`
- `chain-of-thought-designer`
 * @param {string} params.task_description - Task to exemplify
 * @param {number} params.num_examples - Number of examples
