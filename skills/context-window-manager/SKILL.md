---
name: Context Window Overflow Preventer
version: 1.0.0
description: Prevent token limit exceeded errors with proactive context management
author: OpenClaw SysAdmin Community
tags: [12, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  session_id:
    type: string
    description: Session to monitor
    required: True
  max_tokens:
    type: number
    description: Token limit
    required: True
output:
  status: string
  details: object
  tokens_remaining: number
dependencies:
  - openclaw/llm
  - tiktoken
security:
  - Monitor for token abuse; prevent DoS via large contexts per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Context Window Overflow Preventer

## Description

Prevent token limit exceeded errors with proactive context management

## Source Reference

This skill is derived from **12. Diagnostics & Troubleshooting** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Context Window Overflow Prevention

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `session_id` | string | Yes | Session to monitor |
| `max_tokens` | number | Yes | Token limit |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "tokens_remaining": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('context-window-manager', {
  session_id: "value",
  max_tokens: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('context-window-manager', {
  session_id: "value",
  max_tokens: 123
});
```

## Security Considerations

Monitor for token abuse; prevent DoS via large contexts per Category 8

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
const result = await openclaw.skill.run('context-window-manager', { ... });
```

## Related Skills

- `token-budget-optimizer`
- `conversation-compactor`
 * @param {string} params.session_id - Session to monitor
 * @param {number} params.max_tokens - Token limit
