---
name: Blue/Green Deployment Manager
version: 1.0.0
description: Implement safe rollout patterns with blue/green and canary deployments
author: OpenClaw SysAdmin Community
tags: [13, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  deployment_type:
    type: string
    description: blue-green|canary
    required: True
  new_version:
    type: string
    description: New version to deploy
    required: True
  traffic_split:
    type: number
    description: Traffic % to new version
    required: False
output:
  status: string
  details: object
  deployment_status: string
dependencies:
  - openclaw/gateway
  - load-balancer
security:
  - Secure deployment pipeline; validate new version per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Blue/Green Deployment Manager

## Description

Implement safe rollout patterns with blue/green and canary deployments

## Source Reference

This skill is derived from **13. Upgrade & Lifecycle Management** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Blue/Green & Canary Deployment Strategies

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `deployment_type` | string | Yes | blue-green|canary |
| `new_version` | string | Yes | New version to deploy |
| `traffic_split` | number | No | Traffic % to new version |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "deployment_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('blue-green-deployer', {
  deployment_type: "value",
  new_version: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('blue-green-deployer', {
  deployment_type: "value",
  new_version: "value",
  traffic_split: 123
});
```

## Security Considerations

Secure deployment pipeline; validate new version per Category 8

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
const result = await openclaw.skill.run('blue-green-deployer', { ... });
```

## Related Skills

- `rollback-automation`
- `health-check-automation`
 * @param {string} params.deployment_type - blue-green|canary
 * @param {string} params.new_version - New version to deploy
 * @param {number} params.traffic_split - Traffic % to new version
