---
name: Real-time Voice Mode
version: 1.0.0
description: Configure Voice Wake on macOS/iOS/Android with low-latency streaming
author: OpenClaw SysAdmin Community
tags: [4, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  platform:
    type: string
    description: macos|ios|android
    required: True
  wake_phrase:
    type: string
    description: Voice wake phrase
    required: False
  enable:
    type: boolean
    description: Enable voice wake
    required: True
output:
  status: string
  details: object
  voice_status: string
dependencies:
  - openclaw/gateway
  - platform-specific-voice
security:
  - Local audio processing preferred per Category 8 privacy; secure wake phrase
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Real-time Voice Mode

## Description

Configure Voice Wake on macOS/iOS/Android with low-latency streaming

## Source Reference

This skill is derived from **4. Multimodal Input Processing** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Real-time Voice Mode

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `platform` | string | Yes | macos|ios|android |
| `wake_phrase` | string | No | Voice wake phrase |
| `enable` | boolean | Yes | Enable voice wake |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "voice_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('realtime-voice-mode', {
  platform: "value",
  enable: true
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('realtime-voice-mode', {
  platform: "value",
  wake_phrase: "value",
  enable: true
});
```

## Security Considerations

Local audio processing preferred per Category 8 privacy; secure wake phrase

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
const result = await openclaw.skill.run('realtime-voice-mode', { ... });
```

## Related Skills

- `speech-to-text-manager`
- `vad-detector`
 * @param {string} params.platform - macos|ios|android
 * @param {string} params.wake_phrase - Voice wake phrase
 * @param {boolean} params.enable - Enable voice wake
