---
name: Load Balancing & High Availability
version: 1.0.0
description: Configure multi-instance deployment with load balancing for high availability
author: OpenClaw SysAdmin Community
tags: [2, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  instances:
    type: array
    description: List of instance endpoints
    required: True
  lb_algorithm:
    type: string
    description: round_robin|least_conn|ip_hash
    required: False
output:
  status: string
  details: object
  health_status: array
dependencies:
  - openclaw/gateway
  - nginx|haproxy
security:
  - Health check authentication; secure inter-instance communication per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Load Balancing & High Availability

## Description

Configure multi-instance deployment with load balancing for high availability

## Source Reference

This skill is derived from **2. Infrastructure & Deployment Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Load Balancing & High Availability Strategies

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `instances` | array | Yes | List of instance endpoints |
| `lb_algorithm` | string | No | round_robin|least_conn|ip_hash |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "health_status": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('load-balancing-ha', {
  instances: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('load-balancing-ha', {
  instances: [],
  lb_algorithm: "value"
});
```

## Security Considerations

Health check authentication; secure inter-instance communication per Category 8

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
const result = await openclaw.skill.run('load-balancing-ha', { ... });
```

## Related Skills

- `reverse-proxy-integration`
- `health-check-automation`
 * @param {Array} params.instances - List of instance endpoints
 * @param {string} params.lb_algorithm - round_robin|least_conn|ip_hash
