---
name: Human-in-the-Loop Workflow Manager
version: 1.0.0
description: Design approval workflows requiring human intervention
author: OpenClaw SysAdmin Community
tags: [10, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  workflow_id:
    type: string
    description: Workflow instance
    required: True
  approval_step:
    type: string
    description: Step requiring approval
    required: True
  approvers:
    type: array
    description: List of approvers
    required: True
output:
  status: string
  details: object
  approval_status: string
dependencies:
  - openclaw/workflow
  - openclaw/notify
security:
  - Authenticate approvers; audit all approvals; timeout handling per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Human-in-the-Loop Workflow Manager

## Description

Design approval workflows requiring human intervention

## Source Reference

This skill is derived from **10. Automation & Workflow Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Human-in-the-Loop (HITL) Workflow Design

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `workflow_id` | string | Yes | Workflow instance |
| `approval_step` | string | Yes | Step requiring approval |
| `approvers` | array | Yes | List of approvers |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "approval_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('hitl-workflow-manager', {
  workflow_id: "value",
  approval_step: "value",
  approvers: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('hitl-workflow-manager', {
  workflow_id: "value",
  approval_step: "value",
  approvers: []
});
```

## Security Considerations

Authenticate approvers; audit all approvals; timeout handling per Category 8

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
const result = await openclaw.skill.run('hitl-workflow-manager', { ... });
```

## Related Skills

- `workflow-state-machine`
- `event-trigger-manager`
 * @param {string} params.workflow_id - Workflow instance
 * @param {string} params.approval_step - Step requiring approval
 * @param {Array} params.approvers - List of approvers
