---
name: Web UI Customizer
version: 1.0.0
description: Customize Web UI with HTML templates and CSS overrides
author: OpenClaw SysAdmin Community
tags: [7, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  theme_path:
    type: string
    description: Custom theme directory
    required: True
  apply_css:
    type: string
    description: Custom CSS to apply
    required: False
output:
  status: string
  details: object
  theme_applied: boolean
dependencies:
  - openclaw/fs
  - openclaw/web
security:
  - Sanitize CSS per Category 8; prevent XSS via templates; DOMPurify config
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Web UI Customizer

## Description

Customize Web UI with HTML templates and CSS overrides

## Source Reference

This skill is derived from **7. User Interface & Experience Layer** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: HTML Template Customization & CSS Override Systems

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `theme_path` | string | Yes | Custom theme directory |
| `apply_css` | string | No | Custom CSS to apply |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "theme_applied": <boolean>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('web-ui-customizer', {
  theme_path: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('web-ui-customizer', {
  theme_path: "value",
  apply_css: "value"
});
```

## Security Considerations

Sanitize CSS per Category 8; prevent XSS via templates; DOMPurify config

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
const result = await openclaw.skill.run('web-ui-customizer', { ... });
```

## Related Skills

- `rich-formatter`
- `pwa-configurator`
 * @param {string} params.theme_path - Custom theme directory
 * @param {string} params.apply_css - Custom CSS to apply
