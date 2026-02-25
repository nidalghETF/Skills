---
name: AI Safety & Bias Guardian
version: 1.0.0
description: Monitor and mitigate AI bias with responsible AI guidelines
author: OpenClaw SysAdmin Community
tags: [15, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  model_output:
    type: string
    description: Output to check
    required: True
  check_type:
    type: string
    description: bias|safety|toxicity
    required: True
output:
  status: string
  details: object
  safety_score: number
  flags: array
dependencies:
  - openclaw/llm
  - fairness-metrics
security:
  - Ethical AI guidelines; prevent harmful outputs; audit safety checks
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# AI Safety & Bias Guardian

## Description

Monitor and mitigate AI bias with responsible AI guidelines

## Source Reference

This skill is derived from **15. Compliance, Governance & Ethics** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: AI Safety & Bias Mitigation Guidelines

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `model_output` | string | Yes | Output to check |
| `check_type` | string | Yes | bias|safety|toxicity |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "safety_score": <number>,
  "flags": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('ai-safety-guardian', {
  model_output: "value",
  check_type: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('ai-safety-guardian', {
  model_output: "value",
  check_type: "value"
});
```

## Security Considerations

Ethical AI guidelines; prevent harmful outputs; audit safety checks

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
const result = await openclaw.skill.run('ai-safety-guardian', { ... });
```

## Related Skills

- `input-sanitization-filter`
- `pii-detection-redactor`
 * @param {string} params.model_output - Output to check
 * @param {string} params.check_type - bias|safety|toxicity
