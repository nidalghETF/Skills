---
name: Speech-to-Text Engine Integration
version: 1.0.0
description: Integrate Whisper, OpenAI STT, and local STT options for audio transcription
author: OpenClaw SysAdmin Community
tags: [4, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  audio_path:
    type: string
    description: Path to audio file
    required: True
  engine:
    type: string
    description: whisper|openai|local
    required: False
  language:
    type: string
    description: Language code
    required: False
output:
  status: string
  details: object
  transcript: string
dependencies:
  - openclaw/exec
  - openai-whisper
security:
  - Validate audio file types; scan for embedded payloads per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Speech-to-Text Engine Integration

## Description

Integrate Whisper, OpenAI STT, and local STT options for audio transcription

## Source Reference

This skill is derived from **4. Multimodal Input Processing** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Speech-to-Text Engine Integration

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `audio_path` | string | Yes | Path to audio file |
| `engine` | string | No | whisper|openai|local |
| `language` | string | No | Language code |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "transcript": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('speech-to-text-manager', {
  audio_path: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('speech-to-text-manager', {
  audio_path: "value",
  engine: "value",
  language: "value"
});
```

## Security Considerations

Validate audio file types; scan for embedded payloads per Category 8

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
const result = await openclaw.skill.run('speech-to-text-manager', { ... });
```

## Related Skills

- `audio-format-converter`
- `realtime-transcription`
 * @param {string} params.audio_path - Path to audio file
 * @param {string} params.engine - whisper|openai|local
 * @param {string} params.language - Language code
