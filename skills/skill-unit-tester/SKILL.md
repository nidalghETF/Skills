---
name: Skill Unit Tester
version: 1.0.0
description: Create and run deterministic validation scripts for skills
author: OpenClaw SysAdmin Community
tags: [20, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  skill_id:
    type: string
    description: Skill to test
    required: True
  test_cases:
    type: array
    description: Test case definitions
    required: False
output:
  status: string
  details: object
  test_results: array
  coverage: number
dependencies:
  - openclaw/exec
  - jest|mocha
security:
  - Sandbox skill tests per Category 8; validate test inputs; no production data
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Skill Unit Tester

## Description

Create and run deterministic validation scripts for skills

## Source Reference

This skill is derived from **20. Testing & Quality Assurance** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Unit Testing for Skills

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `skill_id` | string | Yes | Skill to test |
| `test_cases` | array | No | Test case definitions |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "test_results": <array>,
  "coverage": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('skill-unit-tester', {
  skill_id: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('skill-unit-tester', {
  skill_id: "value",
  test_cases: []
});
```

## Security Considerations

Sandbox skill tests per Category 8; validate test inputs; no production data

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
const result = await openclaw.skill.run('skill-unit-tester', { ... });
```

## Related Skills

- `integration-tester`
- `bitdefender-skills-checker`
 * @param {string} params.skill_id - Skill to test
 * @param {Array} params.test_cases - Test case definitions
