---
name: Audio Format Converter
version: 1.0.0
description: Convert between MP3, M4A, WAV formats with normalization
author: OpenClaw SysAdmin Community
tags: [4, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  input_path:
    type: string
    description: Input audio path
    required: True
  output_format:
    type: string
    description: mp3|m4a|wav
    required: True
  normalize:
    type: boolean
    description: Apply normalization
    required: False
output:
  status: string
  details: object
  output_path: string
dependencies:
  - openclaw/exec
  - ffmpeg
security:
  - Validate ffmpeg parameters prevent command injection per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Audio Format Converter

## Description

Convert between MP3, M4A, WAV formats with normalization

## Source Reference

This skill is derived from **4. Multimodal Input Processing** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Audio Format Conversion & Normalization

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `input_path` | string | Yes | Input audio path |
| `output_format` | string | Yes | mp3|m4a|wav |
| `normalize` | boolean | No | Apply normalization |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "output_path": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('audio-format-converter', {
  input_path: "value",
  output_format: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('audio-format-converter', {
  input_path: "value",
  output_format: "value",
  normalize: true
});
```

## Security Considerations

Validate ffmpeg parameters prevent command injection per Category 8

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
const result = await openclaw.skill.run('audio-format-converter', { ... });
```

## Related Skills

- `speech-to-text-manager`
- `text-to-speech-manager`
 * @param {string} params.input_path - Input audio path
 * @param {string} params.output_format - mp3|m4a|wav
 * @param {boolean} params.normalize - Apply normalization
