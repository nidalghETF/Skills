---
name: Feature Dependency Analyzer
version: 1.0.0
description: Analyze feature interactions and detect conflicts
author: OpenClaw SysAdmin Community
tags: [17, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  feature_list:
    type: array
    description: Features to analyze
    required: True
output:
  status: string
  details: object
  dependency_graph: object
  conflicts: array
dependencies:
  - openclaw/config
  - dependency-graph
security:
  - Validate feature combinations; prevent insecure feature interactions per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Feature Dependency Analyzer

## Description

Analyze feature interactions and detect conflicts

## Source Reference

This skill is derived from **17. Feature Utilization & Capability Discovery** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Feature Dependency & Conflict Graphs

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `feature_list` | array | Yes | Features to analyze |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "dependency_graph": <object>,
  "conflicts": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('feature-dependency-analyzer', {
  feature_list: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('feature-dependency-analyzer', {
  feature_list: []
});
```

## Security Considerations

Validate feature combinations; prevent insecure feature interactions per Category 8

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
const result = await openclaw.skill.run('feature-dependency-analyzer', { ... });
```

## Related Skills

- `feature-capability-mapper`
- `anti-pattern-detector`
 * @param {Array} params.feature_list - Features to analyze
