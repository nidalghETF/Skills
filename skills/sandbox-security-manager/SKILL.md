---
name: Sandbox Security Manager
version: 1.0.0
description: Enforce Docker isolation and process boundaries to prevent container escapes
author: OpenClaw SysAdmin Community
tags: [8, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  container_id:
    type: string
    description: Container to secure
    required: True
  hardening_level:
    type: string
    description: standard|high|paranoid
    required: False
output:
  status: string
  details: object
  security_profile: object
dependencies:
  - openclaw/exec
  - docker
  - seccomp
security:
  - Use seccomp profiles; drop capabilities; read-only rootfs; no-new-privileges; AppArmor/SELinux
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Sandbox Security Manager

## Description

Enforce Docker isolation and process boundaries to prevent container escapes

## Source Reference

This skill is derived from **8. Security & Hardening Matrix** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Sandboxing & Container Escape Prevention

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `container_id` | string | Yes | Container to secure |
| `hardening_level` | string | No | standard|high|paranoid |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "security_profile": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('sandbox-security-manager', {
  container_id: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('sandbox-security-manager', {
  container_id: "value",
  hardening_level: "value"
});
```

## Security Considerations

Use seccomp profiles; drop capabilities; read-only rootfs; no-new-privileges; AppArmor/SELinux

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
const result = await openclaw.skill.run('sandbox-security-manager', { ... });
```

## Related Skills

- `sandbox-manager`
- `container-lifecycle-manager`
 * @param {string} params.container_id - Container to secure
 * @param {string} params.hardening_level - standard|high|paranoid
