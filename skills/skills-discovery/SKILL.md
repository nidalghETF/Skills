---
name: Skills Discovery
version: 1.0.0
description: Discover available skills via SKILL.md and clawdhub CLI
author: OpenClaw SysAdmin Community
tags: [17, sysadmin, chat]
trigger:
  type: chat
  schedule: ""
  enabled: true
input:
  search_term:
    type: string
    description: Skill search query
    required: False
  category:
    type: string
    description: Filter by category
    required: False
output:
  status: string
  details: object
  skills: array
dependencies:
  - openclaw/fs
  - clawdhub-cli
security:
  - Verify skill sources per Category 8; use Bitdefender checker before install
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Skills Discovery

## Description

Discover available skills via SKILL.md and clawdhub CLI

## Source Reference

This skill is derived from **17. Feature Utilization & Capability Discovery** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Skills Discovery

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `search_term` | string | No | Skill search query |
| `category` | string | No | Filter by category |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "skills": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('skills-discovery', {
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('skills-discovery', {
  search_term: "value",
  category: "value"
});
```

## Security Considerations

Verify skill sources per Category 8; use Bitdefender checker before install

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
const result = await openclaw.skill.run('skills-discovery', { ... });
```

## Related Skills

- `skill-registry-crawler`
- `bitdefender-skills-checker`
 * @param {string} params.search_term - Skill search query
 * @param {string} params.category - Filter by category
