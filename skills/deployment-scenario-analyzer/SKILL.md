---
name: Deployment Scenario Analyzer
version: 1.0.0
description: Analyze and recommend optimal deployment scenario based on requirements and constraints
author: OpenClaw SysAdmin Community
tags: [2, sysadmin, chat]
trigger:
  type: chat
  schedule: ""
  enabled: true
input:
  requirements:
    type: object
    description: Deployment requirements
    required: True
  constraints:
    type: object
    description: Budget/privacy constraints
    required: False
output:
  status: string
  details: object
  recommendation: string
dependencies:
  - openclaw/config
security:
  - Consider security implications per Category 8 for each deployment scenario
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Deployment Scenario Analyzer

## Description

Analyze and recommend optimal deployment scenario based on requirements and constraints

## Source Reference

This skill is derived from **2. Infrastructure & Deployment Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Bare Metal vs. Cloud vs. Edge Deployment Nuances

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `requirements` | object | Yes | Deployment requirements |
| `constraints` | object | No | Budget/privacy constraints |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "recommendation": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('deployment-scenario-analyzer', {
  requirements: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('deployment-scenario-analyzer', {
  requirements: {},
  constraints: {}
});
```

## Security Considerations

Consider security implications per Category 8 for each deployment scenario

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
const result = await openclaw.skill.run('deployment-scenario-analyzer', { ... });
```

## Related Skills

- `hf-spaces-deployer`
- `container-lifecycle-manager`
 * @param {Object} params.requirements - Deployment requirements
 * @param {Object} params.constraints - Budget/privacy constraints
