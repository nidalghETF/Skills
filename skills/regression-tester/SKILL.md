---
name: Regression Test Automation
version: 1.0.0
description: Prevent regression with automated test suites
author: OpenClaw SysAdmin Community
tags: [20, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 1 * * *"
  enabled: true
input:
  test_scope:
    type: string
    description: full|smoke|critical
    required: True
  baseline_version:
    type: string
    description: Version to compare
    required: False
output:
  status: string
  details: object
  regressions: array
dependencies:
  - openclaw/exec
  - jest|mocha
security:
  - Secure regression environment per Category 8; validate test results
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Regression Test Automation

## Description

Prevent regression with automated test suites

## Source Reference

This skill is derived from **20. Testing & Quality Assurance** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Regression Testing Automation

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `test_scope` | string | Yes | full|smoke|critical |
| `baseline_version` | string | No | Version to compare |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "regressions": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('regression-tester', {
  test_scope: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('regression-tester', {
  test_scope: "value",
  baseline_version: "value"
});
```

## Security Considerations

Secure regression environment per Category 8; validate test results

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
const result = await openclaw.skill.run('regression-tester', { ... });
```

## Related Skills

- `skill-unit-tester`
- `integration-tester`
 * @param {string} params.test_scope - full|smoke|critical
 * @param {string} params.baseline_version - Version to compare
