---
name: Rollback Automation
version: 1.0.0
description: Automate quick recovery with rollback procedures and testing
author: OpenClaw SysAdmin Community
tags: [13, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  target_version:
    type: string
    description: Version to rollback to
    required: True
  reason:
    type: string
    description: Rollback reason
    required: False
output:
  status: string
  details: object
  rollback_status: string
dependencies:
  - openclaw/gateway
  - openclaw/fs
security:
  - Authenticate rollback; audit rollback actions per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Rollback Automation

## Description

Automate quick recovery with rollback procedures and testing

## Source Reference

This skill is derived from **13. Upgrade & Lifecycle Management** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Rollback Procedure Automation & Testing

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `target_version` | string | Yes | Version to rollback to |
| `reason` | string | No | Rollback reason |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "rollback_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('rollback-automation', {
  target_version: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('rollback-automation', {
  target_version: "value",
  reason: "value"
});
```

## Security Considerations

Authenticate rollback; audit rollback actions per Category 8

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
const result = await openclaw.skill.run('rollback-automation', { ... });
```

## Related Skills

- `blue-green-deployer`
- `disaster-recovery-manager`
 * @param {string} params.target_version - Version to rollback to
 * @param {string} params.reason - Rollback reason
