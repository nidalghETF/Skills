---
name: Document Processor
version: 1.0.0
description: Process PDF, Office, Markdown documents for ingestion
author: OpenClaw SysAdmin Community
tags: [9, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  document_path:
    type: string
    description: Path to document
    required: True
  extract_metadata:
    type: boolean
    description: Extract metadata
    required: False
output:
  status: string
  details: object
  content: string
  metadata: object
dependencies:
  - openclaw/fs
  - pdf-parse
  - mammoth
  - marked
security:
  - Scan for malicious content; validate file types; prevent XXE in XML per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Document Processor

## Description

Process PDF, Office, Markdown documents for ingestion

## Source Reference

This skill is derived from **9. Data Persistence & Knowledge Management** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Document Processing Pipelines

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `document_path` | string | Yes | Path to document |
| `extract_metadata` | boolean | No | Extract metadata |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "content": <string>,
  "metadata": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('document-processor', {
  document_path: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('document-processor', {
  document_path: "value",
  extract_metadata: true
});
```

## Security Considerations

Scan for malicious content; validate file types; prevent XXE in XML per Category 8

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
const result = await openclaw.skill.run('document-processor', { ... });
```

## Related Skills

- `image-video-processor`
- `embedding-model-manager`
 * @param {string} params.document_path - Path to document
 * @param {boolean} params.extract_metadata - Extract metadata
