---
name: Memory System Manager
version: 1.0.0
description: Manage capture → recall → decay → learn memory cycles
author: OpenClaw SysAdmin Community
tags: [9, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  action:
    type: string
    description: capture|recall|decay|learn
    required: True
  memory_data:
    type: object
    description: Memory data
    required: False
output:
  status: string
  details: object
  memory_result: any
dependencies:
  - openclaw/memory
  - openclaw/db
security:
  - Memory access controls; encryption of sensitive memories per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Memory System Manager

## Description

Manage capture → recall → decay → learn memory cycles

## Source Reference

This skill is derived from **9. Data Persistence & Knowledge Management** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Memory System Architecture

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | capture|recall|decay|learn |
| `memory_data` | object | No | Memory data |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "memory_result": <any>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('memory-system-manager', {
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('memory-system-manager', {
  action: "value",
  memory_data: {}
});
```

## Security Considerations

Memory access controls; encryption of sensitive memories per Category 8

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
const result = await openclaw.skill.run('memory-system-manager', { ... });
```

## Related Skills

- `memory-consolidator`
- `embedding-cache-manager`
 * @param {string} params.action - capture|recall|decay|learn
 * @param {Object} params.memory_data - Memory data
