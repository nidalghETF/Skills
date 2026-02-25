---
name: Bitdefender Pre-Deployment Checker
version: 1.0.0
description: Mandatory pre-deployment security validation with Bitdefender
author: OpenClaw SysAdmin Community
tags: [20, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  skill_path:
    type: string
    description: Skill to validate
    required: True
  block_on_fail:
    type: boolean
    description: Block deployment on failure
    required: False
output:
  status: string
  details: object
  passed: boolean
  threats: array
dependencies:
  - openclaw/exec
  - bitdefender-api
security:
  - ESSENTIAL per Category 8: 17% malicious skills; 54% crypto-related; scan ALL skills pre-deployment
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Bitdefender Pre-Deployment Checker

## Description

Mandatory pre-deployment security validation with Bitdefender

## Source Reference

This skill is derived from **20. Testing & Quality Assurance** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Bitdefender AI Skills Checker

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `skill_path` | string | Yes | Skill to validate |
| `block_on_fail` | boolean | No | Block deployment on failure |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "passed": <boolean>,
  "threats": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('bitdefender-predeploy-checker', {
  skill_path: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('bitdefender-predeploy-checker', {
  skill_path: "value",
  block_on_fail: true
});
```

## Security Considerations

ESSENTIAL per Category 8: 17% malicious skills; 54% crypto-related; scan ALL skills pre-deployment

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
const result = await openclaw.skill.run('bitdefender-predeploy-checker', { ... });
```

## Related Skills

- `vulnerability-scanner`
- `supply-chain-validator`
 * @param {string} params.skill_path - Skill to validate
 * @param {boolean} params.block_on_fail - Block deployment on failure
