---
name: Consensus Mechanism
version: 1.0.0
description: Implement collaborative decision making with consensus protocols
author: OpenClaw SysAdmin Community
tags: [21, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  decision_topic:
    type: string
    description: Decision to make
    required: True
  agent_votes:
    type: array
    description: Agent votes
    required: True
  threshold:
    type: number
    description: Consensus threshold
    required: False
output:
  status: string
  details: object
  consensus_reached: boolean
  decision: string
dependencies:
  - openclaw/gateway
  - consensus-algorithm
security:
  - Byzantine fault tolerance per Category 8; prevent consensus attacks; vote authentication
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Consensus Mechanism

## Description

Implement collaborative decision making with consensus protocols

## Source Reference

This skill is derived from **21. Multi-Agent Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Consensus Mechanisms for Distributed Decision Making

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `decision_topic` | string | Yes | Decision to make |
| `agent_votes` | array | Yes | Agent votes |
| `threshold` | number | No | Consensus threshold |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "consensus_reached": <boolean>,
  "decision": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('consensus-mechanism', {
  decision_topic: "value",
  agent_votes: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('consensus-mechanism', {
  decision_topic: "value",
  agent_votes: [],
  threshold: 123
});
```

## Security Considerations

Byzantine fault tolerance per Category 8; prevent consensus attacks; vote authentication

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
const result = await openclaw.skill.run('consensus-mechanism', { ... });
```

## Related Skills

- `agent-communication-protocol`
- `hierarchical-agent-manager`
 * @param {string} params.decision_topic - Decision to make
 * @param {Array} params.agent_votes - Agent votes
 * @param {number} params.threshold - Consensus threshold
