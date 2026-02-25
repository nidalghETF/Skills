---
name: E2E Conversation Flow Tester
version: 1.0.0
description: Validate end-to-end conversation flows
author: OpenClaw SysAdmin Community
tags: [20, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  conversation_script:
    type: array
    description: Conversation steps
    required: True
  expected_outcomes:
    type: array
    description: Expected results
    required: True
output:
  status: string
  details: object
  flow_valid: boolean
dependencies:
  - openclaw/gateway
  - puppeteer|playwright
security:
  - E2E test isolation per Category 8; no sensitive data in tests
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# E2E Conversation Flow Tester

## Description

Validate end-to-end conversation flows

## Source Reference

This skill is derived from **20. Testing & Quality Assurance** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: E2E Conversation Flow Testing

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `conversation_script` | array | Yes | Conversation steps |
| `expected_outcomes` | array | Yes | Expected results |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "flow_valid": <boolean>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('e2e-conversation-tester', {
  conversation_script: 123,
  expected_outcomes: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('e2e-conversation-tester', {
  conversation_script: [],
  expected_outcomes: []
});
```

## Security Considerations

E2E test isolation per Category 8; no sensitive data in tests

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
const result = await openclaw.skill.run('e2e-conversation-tester', { ... });
```

## Related Skills

- `integration-tester`
- `regression-tester`
 * @param {Array} params.conversation_script - Conversation steps
 * @param {Array} params.expected_outcomes - Expected results
