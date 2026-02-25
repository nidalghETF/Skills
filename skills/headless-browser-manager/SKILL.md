---
name: Headless Browser Manager
version: 1.0.0
description: Manage Puppeteer/Playwright integration for web automation
author: OpenClaw SysAdmin Community
tags: [7, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  action:
    type: string
    description: screenshot|scrape|automate
    required: True
  target_url:
    type: string
    description: Target URL
    required: True
  script:
    type: string
    description: Automation script
    required: False
output:
  status: string
  details: object
  result: any
dependencies:
  - openclaw/exec
  - puppeteer|playwright
security:
  - Validate URLs per Category 8; isolate browser context; prevent SSRF
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Headless Browser Manager

## Description

Manage Puppeteer/Playwright integration for web automation

## Source Reference

This skill is derived from **7. User Interface & Experience Layer** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Headless Browser Automation

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | screenshot|scrape|automate |
| `target_url` | string | Yes | Target URL |
| `script` | string | No | Automation script |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "result": <any>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('headless-browser-manager', {
  action: "value",
  target_url: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('headless-browser-manager', {
  action: "value",
  target_url: "value",
  script: "value"
});
```

## Security Considerations

Validate URLs per Category 8; isolate browser context; prevent SSRF

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
const result = await openclaw.skill.run('headless-browser-manager', { ... });
```

## Related Skills

- `web-ui-customizer`
- `input-sanitization-filter`
 * @param {string} params.action - screenshot|scrape|automate
 * @param {string} params.target_url - Target URL
 * @param {string} params.script - Automation script
