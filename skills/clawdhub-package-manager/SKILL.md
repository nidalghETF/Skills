---
name: ClawHub Package Manager
version: 1.0.0
description: Manage skill packages via clawdhub CLI with Homebrew integration
author: OpenClaw SysAdmin Community
tags: [5, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  action:
    type: string
    description: install|uninstall|update|search
    required: True
  skill_name:
    type: string
    description: Skill name or ID
    required: True
  version:
    type: string
    description: Specific version
    required: False
output:
  status: string
  details: object
  installed_path: string
dependencies:
  - openclaw/exec
  - clawdhub-cli
security:
  - Verify skill signatures per Category 8; use Bitdefender checker before install
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# ClawHub Package Manager

## Description

Manage skill packages via clawdhub CLI with Homebrew integration

## Source Reference

This skill is derived from **5. Skill Ecosystem & Extensibility** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Package Management

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | install|uninstall|update|search |
| `skill_name` | string | Yes | Skill name or ID |
| `version` | string | No | Specific version |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "installed_path": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('clawdhub-package-manager', {
  action: "value",
  skill_name: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('clawdhub-package-manager', {
  action: "value",
  skill_name: "value",
  version: "value"
});
```

## Security Considerations

Verify skill signatures per Category 8; use Bitdefender checker before install

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
const result = await openclaw.skill.run('clawdhub-package-manager', { ... });
```

## Related Skills

- `skill-manifest-validator`
- `dependency-resolver`
 * @param {string} params.action - install|uninstall|update|search
 * @param {string} params.skill_name - Skill name or ID
 * @param {string} params.version - Specific version
