---
name: Cloud Storage Binder
version: 1.0.0
description: Integrate S3, GCS, Azure Blob for cloud storage operations
author: OpenClaw SysAdmin Community
tags: [9, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  provider:
    type: string
    description: s3|gcs|azure
    required: True
  action:
    type: string
    description: upload|download|list|delete
    required: True
  bucket:
    type: string
    description: Bucket name
    required: True
output:
  status: string
  details: object
  object_url: string
dependencies:
  - openclaw/fs
  - aws-sdk|@google-cloud/storage
security:
  - IAM least privilege; encryption in transit/rest; presigned URL expiration per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Cloud Storage Binder

## Description

Integrate S3, GCS, Azure Blob for cloud storage operations

## Source Reference

This skill is derived from **9. Data Persistence & Knowledge Management** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Cloud Storage Bindings

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `provider` | string | Yes | s3|gcs|azure |
| `action` | string | Yes | upload|download|list|delete |
| `bucket` | string | Yes | Bucket name |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "object_url": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('cloud-storage-binder', {
  provider: "value",
  action: "value",
  bucket: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('cloud-storage-binder', {
  provider: "value",
  action: "value",
  bucket: "value"
});
```

## Security Considerations

IAM least privilege; encryption in transit/rest; presigned URL expiration per Category 8

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
const result = await openclaw.skill.run('cloud-storage-binder', { ... });
```

## Related Skills

- `hf-dataset-persistence`
- `automated-backup`
 * @param {string} params.provider - s3|gcs|azure
 * @param {string} params.action - upload|download|list|delete
 * @param {string} params.bucket - Bucket name
