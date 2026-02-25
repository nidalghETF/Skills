---
name: Shared Memory Synchronizer
version: 1.0.0
description: Manage cross-agent memory and state synchronization
author: OpenClaw SysAdmin Community
tags: [21, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  memory_key:
    type: string
    description: Memory key to sync
    required: True
  agent_ids:
    type: array
    description: Agents to sync
    required: True
  sync_mode:
    type: string
    description: push|pull|bidirectional
    required: False
output:
  status: string
  details: object
  sync_status: string
dependencies:
  - openclaw/memory
  - openclaw/db
security:
  - Memory access controls per Category 8; prevent unauthorized sync; encrypt shared state
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Shared Memory Synchronizer

## Description

Manage cross-agent memory and state synchronization

## Source Reference

This skill is derived from **21. Multi-Agent Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Shared Memory & State Synchronization

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `memory_key` | string | Yes | Memory key to sync |
| `agent_ids` | array | Yes | Agents to sync |
| `sync_mode` | string | No | push|pull|bidirectional |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "sync_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('shared-memory-sync', {
  memory_key: "value",
  agent_ids: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('shared-memory-sync', {
  memory_key: "value",
  agent_ids: [],
  sync_mode: "value"
});
```

## Security Considerations

Memory access controls per Category 8; prevent unauthorized sync; encrypt shared state

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
const result = await openclaw.skill.run('shared-memory-sync', { ... });
```

## Related Skills

- `memory-system-manager`
- `agent-communication-protocol`
 * @param {string} params.memory_key - Memory key to sync
 * @param {Array} params.agent_ids - Agents to sync
 * @param {string} params.sync_mode - push|pull|bidirectional
