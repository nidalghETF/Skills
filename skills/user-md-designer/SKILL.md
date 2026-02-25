---
name: USER.md Designer
version: 1.0.0
description: Create USER.md for user context specification and persona
author: OpenClaw SysAdmin Community
tags: [19, sysadmin, chat]
trigger:
  type: chat
  schedule: ""
  enabled: true
input:
  user_role:
    type: string
    description: User's role
    required: True
  preferences:
    type: object
    description: User preferences
    required: False
  language:
    type: string
    description: en|zh|...
    required: False
output:
  status: string
  details: object
  user_md_content: string
dependencies:
  - openclaw/fs
  - openclaw/config
security:
  - PII protection in USER.md per Category 15; validate user data
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# USER.md Designer

## Description

Create USER.md for user context specification and persona

## Source Reference

This skill is derived from **19. Prompt Engineering & System Instructions** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: USER.md Persona Definition

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `user_role` | string | Yes | User's role |
| `preferences` | object | No | User preferences |
| `language` | string | No | en|zh|... |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "user_md_content": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('user-md-designer', {
  user_role: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('user-md-designer', {
  user_role: "value",
  preferences: {},
  language: "value"
});
```

## Security Considerations

PII protection in USER.md per Category 15; validate user data

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
const result = await openclaw.skill.run('user-md-designer', { ... });
```

## Related Skills

- `soul-md-designer`
- `agents-md-designer`
 * @param {string} params.user_role - User's role
 * @param {Object} params.preferences - User preferences
 * @param {string} params.language - en|zh|...
