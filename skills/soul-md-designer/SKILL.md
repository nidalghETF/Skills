---
name: SOUL.md Designer
version: 1.0.0
description: Create SOUL.md for personality definition and core values configuration
author: OpenClaw SysAdmin Community
tags: [19, sysadmin, chat]
trigger:
  type: chat
  schedule: ""
  enabled: true
input:
  personality_type:
    type: string
    description: Personality archetype
    required: True
  core_values:
    type: array
    description: Core value statements
    required: True
  language:
    type: string
    description: en|zh|...
    required: False
output:
  status: string
  details: object
  soul_md_content: string
dependencies:
  - openclaw/fs
  - openclaw/config
security:
  - Ethical guidelines in SOUL.md per Category 15; validate personality settings
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# SOUL.md Designer

## Description

Create SOUL.md for personality definition and core values configuration

## Source Reference

This skill is derived from **19. Prompt Engineering & System Instructions** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: SOUL.md Personality Definition & Values

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `personality_type` | string | Yes | Personality archetype |
| `core_values` | array | Yes | Core value statements |
| `language` | string | No | en|zh|... |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "soul_md_content": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('soul-md-designer', {
  personality_type: "value",
  core_values: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('soul-md-designer', {
  personality_type: "value",
  core_values: [],
  language: "value"
});
```

## Security Considerations

Ethical guidelines in SOUL.md per Category 15; validate personality settings

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
const result = await openclaw.skill.run('soul-md-designer', { ... });
```

## Related Skills

- `agents-md-designer`
- `user-md-designer`
 * @param {string} params.personality_type - Personality archetype
 * @param {Array} params.core_values - Core value statements
 * @param {string} params.language - en|zh|...
