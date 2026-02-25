---
name: Scalability Planner
version: 1.0.0
description: Plan capacity and identify when to scale based on thresholds
author: OpenClaw SysAdmin Community
tags: [16, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  current_load:
    type: number
    description: Current load metric
    required: True
  growth_rate:
    type: number
    description: Growth % per month
    required: True
output:
  status: string
  details: object
  scale_recommendation: string
  timeline: string
dependencies:
  - openclaw/metrics
  - capacity-planner
security:
  - Scale securely per Category 8; maintain security boundaries during scaling
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Scalability Planner

## Description

Plan capacity and identify when to scale based on thresholds

## Source Reference

This skill is derived from **16. Best Practices & Pattern Repository** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Scalability Thresholds & Capacity Planning

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `current_load` | number | Yes | Current load metric |
| `growth_rate` | number | Yes | Growth % per month |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "scale_recommendation": <string>,
  "timeline": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('scalability-planner', {
  current_load: 123,
  growth_rate: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('scalability-planner', {
  current_load: 123,
  growth_rate: 123
});
```

## Security Considerations

Scale securely per Category 8; maintain security boundaries during scaling

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
const result = await openclaw.skill.run('scalability-planner', { ... });
```

## Related Skills

- `performance-benchmarker`
- `load-balancing-ha`
 * @param {number} params.current_load - Current load metric
 * @param {number} params.growth_rate - Growth % per month
