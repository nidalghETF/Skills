---
name: Experimental Feature Manager
version: 1.0.0
description: Manage beta features with safe experimentation and graduation criteria
author: OpenClaw SysAdmin Community
tags: [17, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  feature_name:
    type: string
    description: Experimental feature
    required: True
  action:
    type: string
    description: enable|disable|graduate|rollback
    required: True
output:
  status: string
  details: object
  experiment_status: string
dependencies:
  - openclaw/config
  - openclaw/metrics
security:
  - Secure experimental features; sandbox beta code per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Experimental Feature Manager

## Description

Manage beta features with safe experimentation and graduation criteria

## Source Reference

This skill is derived from **17. Feature Utilization & Capability Discovery** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Experimental Feature Handling & Graduation

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `feature_name` | string | Yes | Experimental feature |
| `action` | string | Yes | enable|disable|graduate|rollback |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "experiment_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('experiment-manager', {
  feature_name: "value",
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('experiment-manager', {
  feature_name: "value",
  action: "value"
});
```

## Security Considerations

Secure experimental features; sandbox beta code per Category 8

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
const result = await openclaw.skill.run('experiment-manager', { ... });
```

## Related Skills

- `feature-flag-manager`
- `feature-capability-mapper`
 * @param {string} params.feature_name - Experimental feature
 * @param {string} params.action - enable|disable|graduate|rollback
