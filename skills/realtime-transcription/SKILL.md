---
name: Real-time Transcription Pipeline
version: 1.0.0
description: Manage live transcription architecture with streaming audio processing
author: OpenClaw SysAdmin Community
tags: [4, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  stream_source:
    type: string
    description: Audio stream source
    required: True
  buffer_size:
    type: number
    description: Audio buffer size
    required: False
output:
  status: string
  details: object
  transcript_stream: stream
dependencies:
  - openclaw/gateway
  - openai-whisper
  - stream-processing
security:
  - Stream encryption per Category 8; validate audio chunks
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Real-time Transcription Pipeline

## Description

Manage live transcription architecture with streaming audio processing

## Source Reference

This skill is derived from **4. Multimodal Input Processing** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Real-time Transcription Pipelines

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `stream_source` | string | Yes | Audio stream source |
| `buffer_size` | number | No | Audio buffer size |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "transcript_stream": <stream>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('realtime-transcription', {
  stream_source: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('realtime-transcription', {
  stream_source: "value",
  buffer_size: 123
});
```

## Security Considerations

Stream encryption per Category 8; validate audio chunks

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
const result = await openclaw.skill.run('realtime-transcription', { ... });
```

## Related Skills

- `speech-to-text-manager`
- `vad-detector`
 * @param {string} params.stream_source - Audio stream source
 * @param {number} params.buffer_size - Audio buffer size
