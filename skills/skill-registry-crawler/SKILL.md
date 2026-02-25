---
name: Skill Registry Crawler
version: 1.0.0
description: Crawl and index ClawHub registry for skill discovery and categorization
author: OpenClaw SysAdmin Community
tags: [5, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 0 * * *"
  enabled: true
input:
  registry_url:
    type: string
    description: Registry URL
    required: False
  category_filter:
    type: string
    description: Filter by category
    required: False
output:
  status: string
  details: object
  skills_found: number
dependencies:
  - openclaw/fs
  - axios
  - cheerio
security:
  - Validate registry SSL per Category 8; verify skill signatures before indexing
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Skill Registry Crawler

## Description

Crawl and index ClawHub registry for skill discovery and categorization

## Source Reference

This skill is derived from **5. Skill Ecosystem & Extensibility** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Skill Registry Crawling, Indexing & Discovery

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `registry_url` | string | No | Registry URL |
| `category_filter` | string | No | Filter by category |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "skills_found": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('skill-registry-crawler', {
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('skill-registry-crawler', {
  registry_url: "value",
  category_filter: "value"
});
```

## Security Considerations

Validate registry SSL per Category 8; verify skill signatures before indexing

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
const result = await openclaw.skill.run('skill-registry-crawler', { ... });
```

## Related Skills

- `clawdhub-package-manager`
- `bitdefender-skills-checker`
 * @param {string} params.registry_url - Registry URL
 * @param {string} params.category_filter - Filter by category
