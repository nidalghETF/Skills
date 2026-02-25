---
name: Cloud Storage & File System Integrator
version: 1.0.0
description: Integrate with Box, Google Drive, Dropbox for file operations
author: OpenClaw SysAdmin Community
tags: [18, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  provider:
    type: string
    description: box|gdrive|dropbox
    required: True
  action:
    type: string
    description: upload|download|sync
    required: True
  file_path:
    type: string
    description: Local file path
    required: True
output:
  status: string
  details: object
  file_url: string
dependencies:
  - openclaw/fs
  - box-sdk|google-drive|dropbox
security:
  - Secure storage tokens per Category 8; file scanning; access controls
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Cloud Storage & File System Integrator

## Description

Integrate with Box, Google Drive, Dropbox for file operations

## Source Reference

This skill is derived from **18. Third-Party Ecosystem Integrations** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Cloud Storage & File Systems

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `provider` | string | Yes | box|gdrive|dropbox |
| `action` | string | Yes | upload|download|sync |
| `file_path` | string | Yes | Local file path |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "file_url": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('cloud-storage-integrator', {
  provider: "value",
  action: "value",
  file_path: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('cloud-storage-integrator', {
  provider: "value",
  action: "value",
  file_path: "value"
});
```

## Security Considerations

Secure storage tokens per Category 8; file scanning; access controls

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
const result = await openclaw.skill.run('cloud-storage-integrator', { ... });
```

## Related Skills

- `cloud-storage-binder`
- `document-processor`
 * @param {string} params.provider - box|gdrive|dropbox
 * @param {string} params.action - upload|download|sync
 * @param {string} params.file_path - Local file path
