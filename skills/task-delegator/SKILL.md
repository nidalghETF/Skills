---
name: Task Delegator & Load Distributor
version: 1.0.0
description: Distribute work across agents with intelligent task delegation
author: OpenClaw SysAdmin Community
tags: [21, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  task:
    type: object
    description: Task to delegate
    required: True
  agent_pool:
    type: array
    description: Available agents
    required: True
  strategy:
    type: string
    description: capability|load|priority
    required: False
output:
  status: string
  details: object
  assigned_agent: string
dependencies:
  - openclaw/gateway
  - load-balancer
security:
  - Task validation per Category 8; agent capability verification; secure delegation
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Task Delegator & Load Distributor

## Description

Distribute work across agents with intelligent task delegation

## Source Reference

This skill is derived from **21. Multi-Agent Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Task Delegation & Load Distribution

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `task` | object | Yes | Task to delegate |
| `agent_pool` | array | Yes | Available agents |
| `strategy` | string | No | capability|load|priority |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "assigned_agent": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('task-delegator', {
  task: 123,
  agent_pool: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('task-delegator', {
  task: {},
  agent_pool: [],
  strategy: "value"
});
```

## Security Considerations

Task validation per Category 8; agent capability verification; secure delegation

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
const result = await openclaw.skill.run('task-delegator', { ... });
```

## Related Skills

- `hierarchical-agent-manager`
- `parallel-executor`
 * @param {Object} params.task - Task to delegate
 * @param {Array} params.agent_pool - Available agents
 * @param {string} params.strategy - capability|load|priority
