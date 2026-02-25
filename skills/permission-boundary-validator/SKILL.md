---
name: Permission Boundary Validator
version: 1.0.0
description: Implement and validate RBAC/ABAC permission boundaries
author: OpenClaw SysAdmin Community
tags: [15, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  user_id:
    type: string
    description: User to validate
    required: True
  resource:
    type: string
    description: Resource to access
    required: True
  action:
    type: string
    description: Action to perform
    required: True
output:
  status: string
  details: object
  allowed: boolean
dependencies:
  - openclaw/gateway
  - casbin
security:
  - Least privilege principle per Category 8; validate all permissions; audit denials
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Permission Boundary Validator

## Description

Implement and validate RBAC/ABAC permission boundaries

## Source Reference

This skill is derived from **15. Compliance, Governance & Ethics** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Permission Boundary Validation

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `user_id` | string | Yes | User to validate |
| `resource` | string | Yes | Resource to access |
| `action` | string | Yes | Action to perform |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "allowed": <boolean>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('permission-boundary-validator', {
  user_id: "value",
  resource: "value",
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('permission-boundary-validator', {
  user_id: "value",
  resource: "value",
  action: "value"
});
```

## Security Considerations

Least privilege principle per Category 8; validate all permissions; audit denials

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
const result = await openclaw.skill.run('permission-boundary-validator', { ... });
```

## Related Skills

- `api-key-manager`
- `oauth-oidc-manager`
 * @param {string} params.user_id - User to validate
 * @param {string} params.resource - Resource to access
 * @param {string} params.action - Action to perform
