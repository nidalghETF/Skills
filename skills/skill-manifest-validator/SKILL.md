---
name: Skill Manifest Validator
version: 1.0.0
description: Validate SKILL.md format, required fields, and skill manifest compliance
author: OpenClaw SysAdmin Community
tags: [5, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  skill_path:
    type: string
    description: Path to skill directory
    required: True
  strict_mode:
    type: boolean
    description: Enable strict validation
    required: False
output:
  status: string
  details: object
  validation_errors: array
dependencies:
  - openclaw/fs
  - yaml|front-matter
security:
  - Scan SKILL.md for malicious content per Category 8; validate all inputs
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Skill Manifest Validator

## Description

Validate SKILL.md format, required fields, and skill manifest compliance

## Source Reference

This skill is derived from **5. Skill Ecosystem & Extensibility** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Skill Manifest Authoring & Validation

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `skill_path` | string | Yes | Path to skill directory |
| `strict_mode` | boolean | No | Enable strict validation |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "validation_errors": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('skill-manifest-validator', {
  skill_path: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('skill-manifest-validator', {
  skill_path: "value",
  strict_mode: true
});
```

## Security Considerations

Scan SKILL.md for malicious content per Category 8; validate all inputs

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
const result = await openclaw.skill.run('skill-manifest-validator', { ... });
```

## Related Skills

- `skill-registry-crawler`
- `bitdefender-skills-checker`
 * @param {string} params.skill_path - Path to skill directory
 * @param {boolean} params.strict_mode - Enable strict validation
