---
name: Token Budget Optimizer
version: 1.0.0
description: Optimize token usage and manage context window for cost control
author: OpenClaw SysAdmin Community
tags: [6, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  max_tokens:
    type: number
    description: Maximum tokens allowed
    required: True
  alert_threshold:
    type: number
    description: Alert at percentage
    required: False
output:
  status: string
  details: object
  current_usage: number
dependencies:
  - openclaw/llm
  - tiktoken
security:
  - Monitor for token abuse per Category 8; rate limit expensive operations
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Token Budget Optimizer

## Description

Optimize token usage and manage context window for cost control

## Source Reference

This skill is derived from **6. Model & Inference Federation** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Token Budget Optimization & Context Window Management

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `max_tokens` | number | Yes | Maximum tokens allowed |
| `alert_threshold` | number | No | Alert at percentage |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "current_usage": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('token-budget-optimizer', {
  max_tokens: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('token-budget-optimizer', {
  max_tokens: 123,
  alert_threshold: 123
});
```

## Security Considerations

Monitor for token abuse per Category 8; rate limit expensive operations

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
const result = await openclaw.skill.run('token-budget-optimizer', { ... });
```

## Related Skills

- `llm-provider-manager`
- `context-window-manager`
 * @param {number} params.max_tokens - Maximum tokens allowed
 * @param {number} params.alert_threshold - Alert at percentage
