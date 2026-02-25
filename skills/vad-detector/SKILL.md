---
name: Voice Activity Detection
version: 1.0.0
description: Implement speech detection algorithms for efficient audio processing
author: OpenClaw SysAdmin Community
tags: [4, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  audio_buffer:
    type: buffer
    description: Audio data buffer
    required: True
  threshold:
    type: number
    description: Detection threshold
    required: False
output:
  status: string
  details: object
  speech_detected: boolean
dependencies:
  - openclaw/exec
  - silero-vad|webrtc-vad
security:
  - Process audio locally per Category 8 privacy; no cloud VAD for sensitive data
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Voice Activity Detection

## Description

Implement speech detection algorithms for efficient audio processing

## Source Reference

This skill is derived from **4. Multimodal Input Processing** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Voice Activity Detection (VAD)

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `audio_buffer` | buffer | Yes | Audio data buffer |
| `threshold` | number | No | Detection threshold |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "speech_detected": <boolean>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('vad-detector', {
  audio_buffer: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('vad-detector', {
  audio_buffer: {},
  threshold: 123
});
```

## Security Considerations

Process audio locally per Category 8 privacy; no cloud VAD for sensitive data

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
const result = await openclaw.skill.run('vad-detector', { ... });
```

## Related Skills

- `realtime-voice-mode`
- `realtime-transcription`
 * @param {Object} params.audio_buffer - Audio data buffer
 * @param {number} params.threshold - Detection threshold
