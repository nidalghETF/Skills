---
name: Communication Platform Integrator
version: 1.0.0
description: Integrate with 20+ channels: Slack, Discord, Telegram, Mattermost, Matrix, Zalo, Line, Feishu, Signal, iMessage
author: OpenClaw SysAdmin Community
tags: [18, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  channel:
    type: string
    description: slack|discord|telegram|...
    required: True
  message:
    type: string
    description: Message to send
    required: True
  target:
    type: string
    description: Channel or user ID
    required: True
output:
  status: string
  details: object
  message_id: string
dependencies:
  - openclaw/channels
  - platform-sdks
security:
  - Secure channel credentials per Category 8; message sanitization; rate limiting
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Communication Platform Integrator

## Description

Integrate with 20+ channels: Slack, Discord, Telegram, Mattermost, Matrix, Zalo, Line, Feishu, Signal, iMessage

## Source Reference

This skill is derived from **18. Third-Party Ecosystem Integrations** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Communication & Collaboration

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `channel` | string | Yes | slack|discord|telegram|... |
| `message` | string | Yes | Message to send |
| `target` | string | Yes | Channel or user ID |

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
const result = await openclaw.skill.run('communication-integrator', {
  channel: "value",
  message: "value",
  target: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('communication-integrator', {
  channel: "value",
  message: "value",
  target: "value"
});
```

## Security Considerations

Secure channel credentials per Category 8; message sanitization; rate limiting

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
const result = await openclaw.skill.run('communication-integrator', { ... });
```

## Related Skills

- `webhook-manager`
- `rich-formatter`
 * @param {string} params.channel - slack|discord|telegram|...
 * @param {string} params.message - Message to send
 * @param {string} params.target - Channel or user ID
