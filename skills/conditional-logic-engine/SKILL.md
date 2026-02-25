---
name: Conditional Logic Engine
version: 1.0.0
description: Implement decision automation with conditional branching
author: OpenClaw SysAdmin Community
tags: [10, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  condition:
    type: object
    description: Condition to evaluate
    required: True
  branches:
    type: object
    description: Branch definitions
    required: True
output:
  status: string
  details: object
  selected_branch: string
dependencies:
  - openclaw/workflow
  - json-logic
security:
  - Validate condition expressions; prevent code injection per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Conditional Logic Engine

## Description

Implement decision automation with conditional branching

## Source Reference

This skill is derived from **10. Automation & Workflow Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Conditional Logic & Branching Trees

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `condition` | object | Yes | Condition to evaluate |
| `branches` | object | Yes | Branch definitions |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "selected_branch": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('conditional-logic-engine', {
  condition: 123,
  branches: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('conditional-logic-engine', {
  condition: {},
  branches: {}
});
```

## Security Considerations

Validate condition expressions; prevent code injection per Category 8

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
const result = await openclaw.skill.run('conditional-logic-engine', { ... });
```

## Related Skills

- `workflow-state-machine`
- `event-trigger-manager`
 * @param {Object} params.condition - Condition to evaluate
 * @param {Object} params.branches - Branch definitions
