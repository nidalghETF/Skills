---
name: Image/Video Ingestion & OCR
version: 1.0.0
description: Process video frames, images with sharp library, and OCR pipelines
author: OpenClaw SysAdmin Community
tags: [4, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  media_path:
    type: string
    description: Path to image/video
    required: True
  extract_frames:
    type: boolean
    description: Extract video frames
    required: False
  perform_ocr:
    type: boolean
    description: Perform OCR
    required: False
output:
  status: string
  details: object
  extracted_text: string
  frames: array
dependencies:
  - openclaw/fs
  - sharp
  - tesseract.js
security:
  - Validate image dimensions prevent decompression bombs per Category 8; scan for exploits
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Image/Video Ingestion & OCR

## Description

Process video frames, images with sharp library, and OCR pipelines

## Source Reference

This skill is derived from **4. Multimodal Input Processing** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Image/Video Ingestion & OCR

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `media_path` | string | Yes | Path to image/video |
| `extract_frames` | boolean | No | Extract video frames |
| `perform_ocr` | boolean | No | Perform OCR |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "extracted_text": <string>,
  "frames": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('image-video-processor', {
  media_path: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('image-video-processor', {
  media_path: "value",
  extract_frames: true,
  perform_ocr: true
});
```

## Security Considerations

Validate image dimensions prevent decompression bombs per Category 8; scan for exploits

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
const result = await openclaw.skill.run('image-video-processor', { ... });
```

## Related Skills

- `object-detection-integrator`
- `audio-format-converter`
 * @param {string} params.media_path - Path to image/video
 * @param {boolean} params.extract_frames - Extract video frames
 * @param {boolean} params.perform_ocr - Perform OCR
