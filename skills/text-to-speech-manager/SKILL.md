---
name: Text-to-Speech Integration
version: 1.0.0
description: Integrate Edge TTS, ElevenLabs, and OpenAI TTS for voice synthesis
author: OpenClaw SysAdmin Community
tags: [4, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  text:
    type: string
    description: Text to synthesize
    required: True
  provider:
    type: string
    description: edge|elevenlabs|openai
    required: True
  voice_id:
    type: string
    description: Voice identifier
    required: False
output:
  status: string
  details: object
  audio_path: string
dependencies:
  - openclaw/fs
  - edge-tts|elevenlabs
security:
  - Secure API keys per Category 8; validate text input length
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Text-to-Speech Integration

## Description

Integrate Edge TTS, ElevenLabs, and OpenAI TTS for voice synthesis

## Source Reference

This skill is derived from **4. Multimodal Input Processing** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Text-to-Speech Integration

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes | Text to synthesize |
| `provider` | string | Yes | edge|elevenlabs|openai |
| `voice_id` | string | No | Voice identifier |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "audio_path": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('text-to-speech-manager', {
  text: "value",
  provider: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('text-to-speech-manager', {
  text: "value",
  provider: "value",
  voice_id: "value"
});
```

## Security Considerations

Secure API keys per Category 8; validate text input length

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
const result = await openclaw.skill.run('text-to-speech-manager', { ... });
```

## Related Skills

- `speech-to-text-manager`
- `realtime-voice-mode`
 * @param {string} params.text - Text to synthesize
 * @param {string} params.provider - edge|elevenlabs|openai
 * @param {string} params.voice_id - Voice identifier
