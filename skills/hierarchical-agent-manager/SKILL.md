---
name: Hierarchical Agent Manager
version: 1.0.0
description: Manage orchestrator pattern and worker agents with hierarchy
author: OpenClaw SysAdmin Community
tags: [21, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  orchestrator_id:
    type: string
    description: Orchestrator agent
    required: True
  worker_ids:
    type: array
    description: Worker agents
    required: True
  task_distribution:
    type: string
    description: round_robin|priority|capability
    required: False
output:
  status: string
  details: object
  hierarchy_status: string
dependencies:
  - openclaw/gateway
  - openclaw/llm
security:
  - Orchestrator authentication per Category 8; worker isolation; privilege separation
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Hierarchical Agent Manager

## Description

Manage orchestrator pattern and worker agents with hierarchy

## Source Reference

This skill is derived from **21. Multi-Agent Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Hierarchical Agent Structures

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `orchestrator_id` | string | Yes | Orchestrator agent |
| `worker_ids` | array | Yes | Worker agents |
| `task_distribution` | string | No | round_robin|priority|capability |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "hierarchy_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('hierarchical-agent-manager', {
  orchestrator_id: "value",
  worker_ids: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('hierarchical-agent-manager', {
  orchestrator_id: "value",
  worker_ids: [],
  task_distribution: "value"
});
```

## Security Considerations

Orchestrator authentication per Category 8; worker isolation; privilege separation

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
const result = await openclaw.skill.run('hierarchical-agent-manager', { ... });
```

## Related Skills

- `agent-communication-protocol`
- `task-delegator`
 * @param {string} params.orchestrator_id - Orchestrator agent
 * @param {Array} params.worker_ids - Worker agents
 * @param {string} params.task_distribution - round_robin|priority|capability
