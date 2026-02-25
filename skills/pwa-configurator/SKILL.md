---
name: PWA Configurator
version: 1.0.0
description: Configure Progressive Web App manifest and service worker
author: OpenClaw SysAdmin Community
tags: [7, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  app_name:
    type: string
    description: PWA app name
    required: True
  theme_color:
    type: string
    description: Theme color
    required: False
  icons:
    type: array
    description: Icon configurations
    required: False
output:
  status: string
  details: object
  manifest_path: string
dependencies:
  - openclaw/fs
  - openclaw/web
security:
  - Validate manifest content per Category 8; secure service worker scope
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# PWA Configurator

## Description

Configure Progressive Web App manifest and service worker

## Source Reference

This skill is derived from **7. User Interface & Experience Layer** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: PWA Manifest Configuration

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `app_name` | string | Yes | PWA app name |
| `theme_color` | string | No | Theme color |
| `icons` | array | No | Icon configurations |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "manifest_path": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('pwa-configurator', {
  app_name: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('pwa-configurator', {
  app_name: "value",
  theme_color: "value",
  icons: []
});
```

## Security Considerations

Validate manifest content per Category 8; secure service worker scope

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
const result = await openclaw.skill.run('pwa-configurator', { ... });
```

## Related Skills

- `web-ui-customizer`
- `mobile-responsive-manager`
 * @param {string} params.app_name - PWA app name
 * @param {string} params.theme_color - Theme color
 * @param {Array} params.icons - Icon configurations
