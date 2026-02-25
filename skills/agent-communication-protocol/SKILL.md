---
name: Agent-to-Agent Communication Protocol
version: 1.0.0
description: Manage inter-agent messaging with secure communication protocols
author: OpenClaw SysAdmin Community
tags: [21, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  sender_id:
    type: string
    description: Sending agent
    required: True
  recipient_id:
    type: string
    description: Receiving agent
    required: True
  message:
    type: object
    description: Message payload
    required: True
output:
  status: string
  details: object
  message_id: string
dependencies:
  - openclaw/gateway
  - message-queue
security:
  - Authenticate agents per Category 8; encrypt inter-agent messages; prevent spoofing
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Agent-to-Agent Communication Protocol

## Description

Manage inter-agent messaging with secure communication protocols

## Source Reference

This skill is derived from **21. Multi-Agent Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Agent-to-Agent Communication Protocols

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `sender_id` | string | Yes | Sending agent |
| `recipient_id` | string | Yes | Receiving agent |
| `message` | object | Yes | Message payload |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "message_id": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('agent-communication-protocol', {
  sender_id: "value",
  recipient_id: "value",
  message: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('agent-communication-protocol', {
  sender_id: "value",
  recipient_id: "value",
  message: {}
});
```

## Security Considerations

Authenticate agents per Category 8; encrypt inter-agent messages; prevent spoofing

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
const result = await openclaw.skill.run('agent-communication-protocol', { ... });
```

## Related Skills

- `hierarchical-agent-manager`
- `consensus-mechanism`
 * @param {string} params.sender_id - Sending agent
 * @param {string} params.recipient_id - Receiving agent
 * @param {Object} params.message - Message payload
