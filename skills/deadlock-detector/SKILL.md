---
name: Deadlock & Race Condition Detector
version: 1.0.0
description: Detect concurrency issues with deadlock and race condition analysis
author: OpenClaw SysAdmin Community
tags: [12, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  test_suite:
    type: string
    description: Tests to run
    required: True
  concurrency_level:
    type: number
    description: Concurrency to test
    required: False
output:
  status: string
  details: object
  issues_found: array
dependencies:
  - openclaw/exec
  - race-detector
security:
  - Secure test environment; prevent test-based attacks per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Deadlock & Race Condition Detector

## Description

Detect concurrency issues with deadlock and race condition analysis

## Source Reference

This skill is derived from **12. Diagnostics & Troubleshooting** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Deadlock & Race Condition Detection

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `test_suite` | string | Yes | Tests to run |
| `concurrency_level` | number | No | Concurrency to test |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "issues_found": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('deadlock-detector', {
  test_suite: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('deadlock-detector', {
  test_suite: "value",
  concurrency_level: 123
});
```

## Security Considerations

Secure test environment; prevent test-based attacks per Category 8

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
const result = await openclaw.skill.run('deadlock-detector', { ... });
```

## Related Skills

- `parallel-executor`
- `error-retry-manager`
 * @param {string} params.test_suite - Tests to run
 * @param {number} params.concurrency_level - Concurrency to test
