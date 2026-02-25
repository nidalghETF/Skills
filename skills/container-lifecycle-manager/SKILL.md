---
name: Container Lifecycle Manager
version: 1.0.0
description: Manage Docker/Podman containers for OpenClaw deployment with image building and orchestration
author: OpenClaw SysAdmin Community
tags: [2, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  action:
    type: string
    description: build|run|stop|remove|logs
    required: True
  container_name:
    type: string
    description: Container name
    required: False
  image_tag:
    type: string
    description: Docker image tag
    required: False
output:
  status: string
  details: object
  container_id: string
dependencies:
  - openclaw/exec
  - docker-cli
security:
  - Container escape prevention per Category 8; use non-root user; validate image signatures
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Container Lifecycle Manager

## Description

Manage Docker/Podman containers for OpenClaw deployment with image building and orchestration

## Source Reference

This skill is derived from **2. Infrastructure & Deployment Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Container Lifecycle Management

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | build|run|stop|remove|logs |
| `container_name` | string | No | Container name |
| `image_tag` | string | No | Docker image tag |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "container_id": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('container-lifecycle-manager', {
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('container-lifecycle-manager', {
  action: "value",
  container_name: "value",
  image_tag: "value"
});
```

## Security Considerations

Container escape prevention per Category 8; use non-root user; validate image signatures

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
const result = await openclaw.skill.run('container-lifecycle-manager', { ... });
```

## Related Skills

- `volume-mount-strategy`
- `network-topology-design`
 * @param {string} params.action - build|run|stop|remove|logs
 * @param {string} params.container_name - Container name
 * @param {string} params.image_tag - Docker image tag
