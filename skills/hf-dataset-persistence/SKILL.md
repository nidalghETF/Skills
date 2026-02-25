---
name: HuggingFace Dataset Persistence
version: 1.0.0
description: Manage ephemeral storage backup strategy for HuggingFace Spaces
author: OpenClaw SysAdmin Community
tags: [11, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 * * * *"
  enabled: true
input:
  dataset_name:
    type: string
    description: HF Dataset name
    required: True
  local_paths:
    type: array
    description: Paths to persist
    required: True
output:
  status: string
  details: object
  dataset_url: string
dependencies:
  - openclaw/fs
  - huggingface-hub
security:
  - Secure HF tokens per Category 8; validate dataset content; access controls
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# HuggingFace Dataset Persistence

## Description

Manage ephemeral storage backup strategy for HuggingFace Spaces

## Source Reference

This skill is derived from **11. Maintenance & Upkeep Operations** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: HuggingFace Dataset Persistence

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `dataset_name` | string | Yes | HF Dataset name |
| `local_paths` | array | Yes | Paths to persist |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "dataset_url": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('hf-dataset-persistence', {
  dataset_name: "value",
  local_paths: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('hf-dataset-persistence', {
  dataset_name: "value",
  local_paths: []
});
```

## Security Considerations

Secure HF tokens per Category 8; validate dataset content; access controls

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
const result = await openclaw.skill.run('hf-dataset-persistence', { ... });
```

## Related Skills

- `automated-backup`
- `cloud-storage-binder`
 * @param {string} params.dataset_name - HF Dataset name
 * @param {Array} params.local_paths - Paths to persist
