---
name: Integration Testing Framework
version: 1.0.0
description: Run cross-component integration tests
author: OpenClaw SysAdmin Community
tags: [20, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 2 * * *"
  enabled: true
input:
  components:
    type: array
    description: Components to test
    required: True
  test_suite:
    type: string
    description: Test suite name
    required: False
output:
  status: string
  details: object
  integration_status: string
dependencies:
  - openclaw/gateway
  - supertest|axios
security:
  - Isolate integration tests per Category 8; secure test credentials
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Integration Testing Framework

## Description

Run cross-component integration tests

## Source Reference

This skill is derived from **20. Testing & Quality Assurance** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Integration Testing Frameworks

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `components` | array | Yes | Components to test |
| `test_suite` | string | No | Test suite name |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "integration_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('integration-tester', {
  components: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('integration-tester', {
  components: [],
  test_suite: "value"
});
```

## Security Considerations

Isolate integration tests per Category 8; secure test credentials

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
const result = await openclaw.skill.run('integration-tester', { ... });
```

## Related Skills

- `skill-unit-tester`
- `e2e-conversation-tester`
 * @param {Array} params.components - Components to test
 * @param {string} params.test_suite - Test suite name
