---
name: Security Audit Runner
version: 1.0.0
description: Run openclaw security audit --fix with 50+ checks across 12 categories
author: OpenClaw SysAdmin Community
tags: [8, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 3 * * *"
  enabled: true
input:
  fix_issues:
    type: boolean
    description: Auto-fix detected issues
    required: False
  check_categories:
    type: array
    description: Specific categories to check
    required: False
output:
  status: string
  details: object
  check_results: array
  fixed_count: number
dependencies:
  - openclaw/exec
  - openclaw/config
security:
  - 50+ check IDs across 12 categories; CVE/GHSA tracking; CIS benchmark alignment per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Security Audit Runner

## Description

Run openclaw security audit --fix with 50+ checks across 12 categories

## Source Reference

This skill is derived from **8. Security & Hardening Matrix** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Security Audit Command

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `fix_issues` | boolean | No | Auto-fix detected issues |
| `check_categories` | array | No | Specific categories to check |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "check_results": <array>,
  "fixed_count": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('security-audit-runner', {
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('security-audit-runner', {
  fix_issues: true,
  check_categories: []
});
```

## Security Considerations

50+ check IDs across 12 categories; CVE/GHSA tracking; CIS benchmark alignment per Category 8

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
const result = await openclaw.skill.run('security-audit-runner', { ... });
```

## Related Skills

- `vulnerability-scanner`
- `audit-log-aggregator`
 * @param {boolean} params.fix_issues - Auto-fix detected issues
 * @param {Array} params.check_categories - Specific categories to check
