---
name: Rich Response Formatter
version: 1.0.0
description: Format responses with cards, buttons, lists, and markdown rendering
author: OpenClaw SysAdmin Community
tags: [7, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  content:
    type: string
    description: Content to format
    required: True
  format_type:
    type: string
    description: card|list|button|markdown
    required: True
output:
  status: string
  details: object
  formatted_output: string
dependencies:
  - openclaw/ui
  - markdown-it
security:
  - Sanitize markdown per Category 8; prevent XSS in rendered content
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Rich Response Formatter

## Description

Format responses with cards, buttons, lists, and markdown rendering

## Source Reference

This skill is derived from **7. User Interface & Experience Layer** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Rich Response Formatting

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `content` | string | Yes | Content to format |
| `format_type` | string | Yes | card|list|button|markdown |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "formatted_output": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('rich-formatter', {
  content: "value",
  format_type: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('rich-formatter', {
  content: "value",
  format_type: "value"
});
```

## Security Considerations

Sanitize markdown per Category 8; prevent XSS in rendered content

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
const result = await openclaw.skill.run('rich-formatter', { ... });
```

## Related Skills

- `web-ui-customizer`
- `cli-autocomplete-manager`
 * @param {string} params.content - Content to format
 * @param {string} params.format_type - card|list|button|markdown
