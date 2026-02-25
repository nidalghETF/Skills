---
name: Cost Optimization Advisor
version: 1.0.0
description: Recommend spot instances, rightsizing, and cost-saving strategies
author: OpenClaw SysAdmin Community
tags: [16, sysadmin, chat]
trigger:
  type: chat
  schedule: ""
  enabled: true
input:
  current_spend:
    type: number
    description: Current monthly spend
    required: True
  usage_pattern:
    type: string
    description: steady|variable|burst
    required: False
output:
  status: string
  details: object
  recommendations: array
  potential_savings: number
dependencies:
  - openclaw/metrics
  - cost-analyzer
security:
  - Cost optimization without security compromise per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Cost Optimization Advisor

## Description

Recommend spot instances, rightsizing, and cost-saving strategies

## Source Reference

This skill is derived from **16. Best Practices & Pattern Repository** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Cost Optimization Guidelines

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `current_spend` | number | Yes | Current monthly spend |
| `usage_pattern` | string | No | steady|variable|burst |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "recommendations": <array>,
  "potential_savings": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('cost-optimizer', {
  current_spend: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('cost-optimizer', {
  current_spend: 123,
  usage_pattern: "value"
});
```

## Security Considerations

Cost optimization without security compromise per Category 8

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
const result = await openclaw.skill.run('cost-optimizer', { ... });
```

## Related Skills

- `cost-attribution-tracker`
- `token-budget-optimizer`
 * @param {number} params.current_spend - Current monthly spend
 * @param {string} params.usage_pattern - steady|variable|burst
