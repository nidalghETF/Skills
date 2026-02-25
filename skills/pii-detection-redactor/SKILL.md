---
name: PII Detection & Redaction
version: 1.0.0
description: Detect and redact personally identifiable information for privacy protection
author: OpenClaw SysAdmin Community
tags: [15, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  text:
    type: string
    description: Text to scan
    required: True
  redaction_method:
    type: string
    description: mask|remove|hash
    required: False
output:
  status: string
  details: object
  redacted_text: string
  pii_found: array
dependencies:
  - openclaw/llm
  - presidio|pii-detector
security:
  - Data sovereignty always in your hands per 知乎 source; secure PII handling per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# PII Detection & Redaction

## Description

Detect and redact personally identifiable information for privacy protection

## Source Reference

This skill is derived from **15. Compliance, Governance & Ethics** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: PII Detection, Redaction & Masking

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes | Text to scan |
| `redaction_method` | string | No | mask|remove|hash |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "redacted_text": <string>,
  "pii_found": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('pii-detection-redactor', {
  text: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('pii-detection-redactor', {
  text: "value",
  redaction_method: "value"
});
```

## Security Considerations

Data sovereignty always in your hands per 知乎 source; secure PII handling per Category 8

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
const result = await openclaw.skill.run('pii-detection-redactor', { ... });
```

## Related Skills

- `data-retention-enforcer`
- `access-log-analyzer`
 * @param {string} params.text - Text to scan
 * @param {string} params.redaction_method - mask|remove|hash
