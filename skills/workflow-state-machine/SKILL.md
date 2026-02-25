---
name: Workflow State Machine
version: 1.0.0
description: Design and execute DAG-based workflows with state management
author: OpenClaw SysAdmin Community
tags: [10, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  workflow_def:
    type: object
    description: Workflow DAG definition
    required: True
  initial_state:
    type: object
    description: Initial state data
    required: False
output:
  status: string
  details: object
  execution_path: array
dependencies:
  - openclaw/workflow
  - dag-builder
security:
  - Validate workflow definitions; sandbox task execution; audit transitions per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Workflow State Machine

## Description

Design and execute DAG-based workflows with state management

## Source Reference

This skill is derived from **10. Automation & Workflow Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Workflow State Machines

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `workflow_def` | object | Yes | Workflow DAG definition |
| `initial_state` | object | No | Initial state data |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "execution_path": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('workflow-state-machine', {
  workflow_def: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('workflow-state-machine', {
  workflow_def: {},
  initial_state: {}
});
```

## Security Considerations

Validate workflow definitions; sandbox task execution; audit transitions per Category 8

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
const result = await openclaw.skill.run('workflow-state-machine', { ... });
```

## Related Skills

- `scheduling-engine`
- `error-retry-manager`
 * @param {Object} params.workflow_def - Workflow DAG definition
 * @param {Object} params.initial_state - Initial state data
