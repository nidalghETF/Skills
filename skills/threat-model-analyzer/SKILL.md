---
name: Threat Model Analyzer
version: 1.0.0
description: Analyze threat model with gateway host as trust boundary
author: OpenClaw SysAdmin Community
tags: [8, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  deployment_type:
    type: string
    description: Deployment scenario
    required: True
  sensitivity_level:
    type: string
    description: low|medium|high|critical
    required: False
output:
  status: string
  details: object
  threats: array
  mitigations: array
dependencies:
  - openclaw/config
  - threat-modeling
security:
  - Gateway host as trust boundary; 28k+ exposed instances risk per SecurityScorecard; harden perimeter
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Threat Model Analyzer

## Description

Analyze threat model with gateway host as trust boundary

## Source Reference

This skill is derived from **8. Security & Hardening Matrix** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Threat Model

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `deployment_type` | string | Yes | Deployment scenario |
| `sensitivity_level` | string | No | low|medium|high|critical |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "threats": <array>,
  "mitigations": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('threat-model-analyzer', {
  deployment_type: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('threat-model-analyzer', {
  deployment_type: "value",
  sensitivity_level: "value"
});
```

## Security Considerations

Gateway host as trust boundary; 28k+ exposed instances risk per SecurityScorecard; harden perimeter

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
const result = await openclaw.skill.run('threat-model-analyzer', { ... });
```

## Related Skills

- `security-audit-runner`
- `zero-trust-config`
 * @param {string} params.deployment_type - Deployment scenario
 * @param {string} params.sensitivity_level - low|medium|high|critical
