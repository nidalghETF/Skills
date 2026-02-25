---
name: Mobile Responsive Manager
version: 1.0.0
description: Configure iOS/Android native UI patterns for mobile responsiveness
author: OpenClaw SysAdmin Community
tags: [7, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  breakpoint_config:
    type: object
    description: Breakpoint settings
    required: False
  mobile_optimizations:
    type: boolean
    description: Enable mobile optimizations
    required: False
output:
  status: string
  details: object
  responsive_config: object
dependencies:
  - openclaw/web
  - responsive-css
security:
  - Validate viewport settings per Category 8; prevent mobile-specific attacks
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Mobile Responsive Manager

## Description

Configure iOS/Android native UI patterns for mobile responsiveness

## Source Reference

This skill is derived from **7. User Interface & Experience Layer** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Mobile Responsive Design

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `breakpoint_config` | object | No | Breakpoint settings |
| `mobile_optimizations` | boolean | No | Enable mobile optimizations |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "responsive_config": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('mobile-responsive-manager', {
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('mobile-responsive-manager', {
  breakpoint_config: {},
  mobile_optimizations: true
});
```

## Security Considerations

Validate viewport settings per Category 8; prevent mobile-specific attacks

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
const result = await openclaw.skill.run('mobile-responsive-manager', { ... });
```

## Related Skills

- `web-ui-customizer`
- `pwa-configurator`
 * @param {Object} params.breakpoint_config - Breakpoint settings
 * @param {boolean} params.mobile_optimizations - Enable mobile optimizations
