---
name: Feature Flag Manager
version: 1.0.0
description: Manage runtime feature control with feature flags and toggles
author: OpenClaw SysAdmin Community
tags: [17, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  feature_name:
    type: string
    description: Feature to toggle
    required: True
  enabled:
    type: boolean
    description: Enable or disable
    required: True
  target_users:
    type: array
    description: User segment
    required: False
output:
  status: string
  details: object
  flag_status: string
dependencies:
  - openclaw/config
  - unleash|launchdarkly
security:
  - Secure flag management; prevent unauthorized toggles per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Feature Flag Manager

## Description

Manage runtime feature control with feature flags and toggles

## Source Reference

This skill is derived from **17. Feature Utilization & Capability Discovery** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Feature Flag & Toggle Management

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `feature_name` | string | Yes | Feature to toggle |
| `enabled` | boolean | Yes | Enable or disable |
| `target_users` | array | No | User segment |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "flag_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('feature-flag-manager', {
  feature_name: "value",
  enabled: true
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('feature-flag-manager', {
  feature_name: "value",
  enabled: true,
  target_users: []
});
```

## Security Considerations

Secure flag management; prevent unauthorized toggles per Category 8

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
const result = await openclaw.skill.run('feature-flag-manager', { ... });
```

## Related Skills

- `feature-capability-mapper`
- `experiment-manager`
 * @param {string} params.feature_name - Feature to toggle
 * @param {boolean} params.enabled - Enable or disable
 * @param {Array} params.target_users - User segment
