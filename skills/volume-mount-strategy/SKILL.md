---
name: Volume & Mount Point Strategy
version: 1.0.0
description: Design and manage data volumes for HuggingFace Spaces persistence and local deployments
author: OpenClaw SysAdmin Community
tags: [2, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  action:
    type: string
    description: create|mount|backup|verify
    required: True
  volume_path:
    type: string
    description: Volume path
    required: True
  persistence_type:
    type: string
    description: local|hf-dataset|cloud
    required: False
output:
  status: string
  details: object
  mount_point: string
dependencies:
  - openclaw/fs
  - docker-cli
security:
  - Validate mount paths prevent traversal; restrict volume permissions per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Volume & Mount Point Strategy

## Description

Design and manage data volumes for HuggingFace Spaces persistence and local deployments

## Source Reference

This skill is derived from **2. Infrastructure & Deployment Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Volume & Mount Point Strategy

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | create|mount|backup|verify |
| `volume_path` | string | Yes | Volume path |
| `persistence_type` | string | No | local|hf-dataset|cloud |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "mount_point": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('volume-mount-strategy', {
  action: "value",
  volume_path: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('volume-mount-strategy', {
  action: "value",
  volume_path: "value",
  persistence_type: "value"
});
```

## Security Considerations

Validate mount paths prevent traversal; restrict volume permissions per Category 8

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
const result = await openclaw.skill.run('volume-mount-strategy', { ... });
```

## Related Skills

- `container-lifecycle-manager`
- `hf-dataset-persistence`
 * @param {string} params.action - create|mount|backup|verify
 * @param {string} params.volume_path - Volume path
 * @param {string} params.persistence_type - local|hf-dataset|cloud
