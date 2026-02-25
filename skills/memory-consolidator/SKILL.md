---
name: Long-term Memory Consolidator
version: 1.0.0
description: Consolidate memories with summaries and entity extraction
author: OpenClaw SysAdmin Community
tags: [9, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 3 * * 0"
  enabled: true
input:
  agent_id:
    type: string
    description: Agent to consolidate
    required: True
  time_range:
    type: string
    description: Time range to process
    required: False
output:
  status: string
  details: object
  memories_consolidated: number
dependencies:
  - openclaw/db
  - openclaw/llm
security:
  - PII detection and masking per Category 8; secure memory access controls
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Long-term Memory Consolidator

## Description

Consolidate memories with summaries and entity extraction

## Source Reference

This skill is derived from **9. Data Persistence & Knowledge Management** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Long-term Memory Consolidation

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `agent_id` | string | Yes | Agent to consolidate |
| `time_range` | string | No | Time range to process |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "memories_consolidated": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('memory-consolidator', {
  agent_id: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('memory-consolidator', {
  agent_id: "value",
  time_range: "value"
});
```

## Security Considerations

PII detection and masking per Category 8; secure memory access controls

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
const result = await openclaw.skill.run('memory-consolidator', { ... });
```

## Related Skills

- `conversation-compactor`
- `vector-store-manager`
 * @param {string} params.agent_id - Agent to consolidate
 * @param {string} params.time_range - Time range to process
