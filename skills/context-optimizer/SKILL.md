---
name: Context Window Optimizer
version: 1.0.0
description: Optimize token efficiency for context window management
author: OpenClaw SysAdmin Community
tags: [19, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  conversation:
    type: array
    description: Messages to optimize
    required: True
  max_tokens:
    type: number
    description: Token limit
    required: True
output:
  status: string
  details: object
  optimized_conversation: array
  tokens_saved: number
dependencies:
  - openclaw/llm
  - tiktoken
security:
  - Preserve security context during optimization per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Context Window Optimizer

## Description

Optimize token efficiency for context window management

## Source Reference

This skill is derived from **19. Prompt Engineering & System Instructions** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Context Window Optimization Strategies

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `conversation` | array | Yes | Messages to optimize |
| `max_tokens` | number | Yes | Token limit |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "optimized_conversation": <array>,
  "tokens_saved": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('context-optimizer', {
  conversation: 123,
  max_tokens: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('context-optimizer', {
  conversation: [],
  max_tokens: 123
});
```

## Security Considerations

Preserve security context during optimization per Category 8

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
const result = await openclaw.skill.run('context-optimizer', { ... });
```

## Related Skills

- `token-budget-optimizer`
- `conversation-compactor`
 * @param {Array} params.conversation - Messages to optimize
 * @param {number} params.max_tokens - Token limit
