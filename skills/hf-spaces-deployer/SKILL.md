---
name: HuggingFace Spaces Deployer
version: 1.0.0
description: Deploy OpenClaw to HuggingFace Spaces with persistence and keepalive configuration
author: OpenClaw SysAdmin Community
tags: [2, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  space_name:
    type: string
    description: HuggingFace Space name
    required: True
  enable_persistence:
    type: boolean
    description: Enable Dataset persistence
    required: False
  setup_keepalive:
    type: boolean
    description: Setup UptimeRobot keepalive
    required: False
output:
  status: string
  details: object
  space_url: string
dependencies:
  - openclaw/fs
  - git
  - huggingface-cli
security:
  - Secure HF tokens in credentials directory per Category 8; validate space configuration
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# HuggingFace Spaces Deployer

## Description

Deploy OpenClaw to HuggingFace Spaces with persistence and keepalive configuration

## Source Reference

This skill is derived from **2. Infrastructure & Deployment Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: HuggingFace Spaces Deployment

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `space_name` | string | Yes | HuggingFace Space name |
| `enable_persistence` | boolean | No | Enable Dataset persistence |
| `setup_keepalive` | boolean | No | Setup UptimeRobot keepalive |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "space_url": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('hf-spaces-deployer', {
  space_name: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('hf-spaces-deployer', {
  space_name: "value",
  enable_persistence: true,
  setup_keepalive: true
});
```

## Security Considerations

Secure HF tokens in credentials directory per Category 8; validate space configuration

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
const result = await openclaw.skill.run('hf-spaces-deployer', { ... });
```

## Related Skills

- `volume-mount-strategy`
- `hf-dataset-persistence`
 * @param {string} params.space_name - HuggingFace Space name
 * @param {boolean} params.enable_persistence - Enable Dataset persistence
 * @param {boolean} params.setup_keepalive - Setup UptimeRobot keepalive
