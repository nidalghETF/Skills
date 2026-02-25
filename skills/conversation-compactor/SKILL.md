---
name: Conversation History Compactor
version: 1.0.0
description: Optimize context window by compacting conversation history
author: OpenClaw SysAdmin Community
tags: [9, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 2 * * *"
  enabled: true
input:
  session_id:
    type: string
    description: Session to compact
    required: False
  compression_ratio:
    type: number
    description: Target compression
    required: False
output:
  status: string
  details: object
  tokens_saved: number
dependencies:
  - openclaw/db
  - openclaw/llm
security:
  - Preserve sensitive content handling per Category 8; audit compaction actions
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Conversation History Compactor

## Description

Optimize context window by compacting conversation history

## Source Reference

This skill is derived from **9. Data Persistence & Knowledge Management** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Conversation History Compaction

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `session_id` | string | No | Session to compact |
| `compression_ratio` | number | No | Target compression |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "tokens_saved": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('conversation-compactor', {
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('conversation-compactor', {
  session_id: "value",
  compression_ratio: 123
});
```

## Security Considerations

Preserve sensitive content handling per Category 8; audit compaction actions

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
const result = await openclaw.skill.run('conversation-compactor', { ... });
```

## Related Skills

- `memory-consolidator`
- `token-budget-optimizer`
 * @param {string} params.session_id - Session to compact
 * @param {number} params.compression_ratio - Target compression
