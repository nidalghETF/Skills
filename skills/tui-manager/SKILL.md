---
name: TUI Terminal Interface Manager
version: 1.0.0
description: Manage text-based user interface with streaming improvements
author: OpenClaw SysAdmin Community
tags: [7, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  action:
    type: string
    description: start|stop|configure
    required: True
  theme:
    type: string
    description: TUI theme
    required: False
output:
  status: string
  details: object
  tui_status: string
dependencies:
  - openclaw/cli
  - blessed|ink
security:
  - Validate terminal escape sequences per Category 8; prevent terminal injection
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# TUI Terminal Interface Manager

## Description

Manage text-based user interface with streaming improvements

## Source Reference

This skill is derived from **7. User Interface & Experience Layer** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: TUI Terminal Interface

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | start|stop|configure |
| `theme` | string | No | TUI theme |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "tui_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('tui-manager', {
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('tui-manager', {
  action: "value",
  theme: "value"
});
```

## Security Considerations

Validate terminal escape sequences per Category 8; prevent terminal injection

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
const result = await openclaw.skill.run('tui-manager', { ... });
```

## Related Skills

- `cli-autocomplete-manager`
- `rich-formatter`
 * @param {string} params.action - start|stop|configure
 * @param {string} params.theme - TUI theme
