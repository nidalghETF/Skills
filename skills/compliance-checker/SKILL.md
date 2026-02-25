---
name: Regulatory Compliance Checker
version: 1.0.0
description: Check GDPR, CCPA compliance with automated validation
author: OpenClaw SysAdmin Community
tags: [15, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 1 1 * *"
  enabled: true
input:
  regulation:
    type: string
    description: gdpr|ccpa|hipaa
    required: True
  scope:
    type: string
    description: data|processes|all
    required: False
output:
  status: string
  details: object
  compliance_score: number
  violations: array
dependencies:
  - openclaw/config
  - compliance-framework
security:
  - Data sovereignty focus per 知乎 source; secure compliance data per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Regulatory Compliance Checker

## Description

Check GDPR, CCPA compliance with automated validation

## Source Reference

This skill is derived from **15. Compliance, Governance & Ethics** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Regulatory Compliance Checking

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `regulation` | string | Yes | gdpr|ccpa|hipaa |
| `scope` | string | No | data|processes|all |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "compliance_score": <number>,
  "violations": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('compliance-checker', {
  regulation: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('compliance-checker', {
  regulation: "value",
  scope: "value"
});
```

## Security Considerations

Data sovereignty focus per 知乎 source; secure compliance data per Category 8

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
const result = await openclaw.skill.run('compliance-checker', { ... });
```

## Related Skills

- `data-retention-enforcer`
- `pii-detection-redactor`
 * @param {string} params.regulation - gdpr|ccpa|hipaa
 * @param {string} params.scope - data|processes|all
