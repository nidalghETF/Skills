---
name: Security Hardening Checklist
version: 1.0.0
description: Apply CIS benchmark-aligned security hardening checklist
author: OpenClaw SysAdmin Community
tags: [16, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  level:
    type: string
    description: 1|2
    required: True
  auto_apply:
    type: boolean
    description: Auto-apply fixes
    required: False
output:
  status: string
  details: object
  hardening_status: object
dependencies:
  - openclaw/exec
  - cis-benchmarks
security:
  - CIS benchmark alignment per Category 8; 50+ check IDs across 12 categories
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Security Hardening Checklist

## Description

Apply CIS benchmark-aligned security hardening checklist

## Source Reference

This skill is derived from **16. Best Practices & Pattern Repository** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Security Hardening Checklists

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `level` | string | Yes | 1|2 |
| `auto_apply` | boolean | No | Auto-apply fixes |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "hardening_status": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('security-hardening-checklist', {
  level: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('security-hardening-checklist', {
  level: "value",
  auto_apply: true
});
```

## Security Considerations

CIS benchmark alignment per Category 8; 50+ check IDs across 12 categories

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
const result = await openclaw.skill.run('security-hardening-checklist', { ... });
```

## Related Skills

- `security-audit-runner`
- `anti-pattern-detector`
 * @param {string} params.level - 1|2
 * @param {boolean} params.auto_apply - Auto-apply fixes
