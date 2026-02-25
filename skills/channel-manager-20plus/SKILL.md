---
name: 20+ Channel Manager
version: 1.0.0
description: Manage complete channel list: WhatsApp, Signal, iMessage, Telegram, Discord, Slack, Matrix, Zalo, Line, Feishu, Google Chat, MS Teams, Nostr, Twitch, Mattermost
author: OpenClaw SysAdmin Community
tags: [18, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  channel_list:
    type: array
    description: Channels to configure
    required: True
  broadcast_message:
    type: string
    description: Message for broadcast
    required: False
output:
  status: string
  details: object
  channel_status: object
dependencies:
  - openclaw/channels
  - channel-sdks
security:
  - Secure all channel credentials per Category 8; OAuth security; message validation
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# 20+ Channel Manager

## Description

Manage complete channel list: WhatsApp, Signal, iMessage, Telegram, Discord, Slack, Matrix, Zalo, Line, Feishu, Google Chat, MS Teams, Nostr, Twitch, Mattermost

## Source Reference

This skill is derived from **18. Third-Party Ecosystem Integrations** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: 20+ Message Channels

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `channel_list` | array | Yes | Channels to configure |
| `broadcast_message` | string | No | Message for broadcast |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "channel_status": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('channel-manager-20plus', {
  channel_list: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('channel-manager-20plus', {
  channel_list: [],
  broadcast_message: "value"
});
```

## Security Considerations

Secure all channel credentials per Category 8; OAuth security; message validation

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
const result = await openclaw.skill.run('channel-manager-20plus', { ... });
```

## Related Skills

- `communication-integrator`
- `oauth-oidc-manager`
 * @param {Array} params.channel_list - Channels to configure
 * @param {string} params.broadcast_message - Message for broadcast
