---
name: Root Cause Analysis Automation
version: 1.0.0
description: Perform systematic debugging with automated RCA
author: OpenClaw SysAdmin Community
tags: [12, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  incident_id:
    type: string
    description: Incident to analyze
    required: True
  time_range:
    type: string
    description: Analysis time range
    required: False
output:
  status: string
  details: object
  root_cause: string
  recommendations: array
dependencies:
  - openclaw/logger
  - openclaw/llm
security:
  - Secure incident data; audit RCA process per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Root Cause Analysis Automation

## Description

Perform systematic debugging with automated RCA

## Source Reference

This skill is derived from **12. Diagnostics & Troubleshooting** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Root Cause Analysis (RCA) Automation

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `incident_id` | string | Yes | Incident to analyze |
| `time_range` | string | No | Analysis time range |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "root_cause": <string>,
  "recommendations": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('root-cause-analyzer', {
  incident_id: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('root-cause-analyzer', {
  incident_id: "value",
  time_range: "value"
});
```

## Security Considerations

Secure incident data; audit RCA process per Category 8

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
const result = await openclaw.skill.run('root-cause-analyzer', { ... });
```

## Related Skills

- `error-code-classifier`
- `log-pattern-analysis`
 * @param {string} params.incident_id - Incident to analyze
 * @param {string} params.time_range - Analysis time range
