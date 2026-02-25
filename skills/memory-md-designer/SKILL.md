---
name: MEMORY.md Designer
version: 1.0.0
description: Create MEMORY.md for memory configuration and recall preferences
author: OpenClaw SysAdmin Community
tags: [19, sysadmin, chat]
trigger:
  type: chat
  schedule: ""
  enabled: true
input:
  memory_type:
    type: string
    description: short|long|episodic
    required: True
  retention_policy:
    type: string
    description: Retention rules
    required: False
output:
  status: string
  details: object
  memory_md_content: string
dependencies:
  - openclaw/fs
  - openclaw/memory
security:
  - Memory privacy settings per Category 15; PII handling in memory
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# MEMORY.md Designer

## Description

Create MEMORY.md for memory configuration and recall preferences

## Source Reference

This skill is derived from **19. Prompt Engineering & System Instructions** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Root .md Files (from PRD)

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `memory_type` | string | Yes | short|long|episodic |
| `retention_policy` | string | No | Retention rules |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "memory_md_content": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('memory-md-designer', {
  memory_type: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('memory-md-designer', {
  memory_type: "value",
  retention_policy: "value"
});
```

## Security Considerations

Memory privacy settings per Category 15; PII handling in memory

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
const result = await openclaw.skill.run('memory-md-designer', { ... });
```

## Related Skills

- `memory-system-manager`
- `memory-consolidator`
 * @param {string} params.memory_type - short|long|episodic
 * @param {string} params.retention_policy - Retention rules
