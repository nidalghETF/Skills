---
name: Network Topology Design
version: 1.0.0
description: Configure bridge and host network modes with proper port mapping for OpenClaw
author: OpenClaw SysAdmin Community
tags: [2, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  network_mode:
    type: string
    description: bridge|host
    required: True
  port_mappings:
    type: array
    description: Port mapping configuration
    required: False
output:
  status: string
  details: object
  network_config: object
dependencies:
  - openclaw/exec
  - docker-cli
security:
  - Prefer bridge mode for isolation; restrict exposed ports per Category 8 hardening
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Network Topology Design

## Description

Configure bridge and host network modes with proper port mapping for OpenClaw

## Source Reference

This skill is derived from **2. Infrastructure & Deployment Orchestration** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Network Topology Design

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `network_mode` | string | Yes | bridge|host |
| `port_mappings` | array | No | Port mapping configuration |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "network_config": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('network-topology-design', {
  network_mode: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('network-topology-design', {
  network_mode: "value",
  port_mappings: []
});
```

## Security Considerations

Prefer bridge mode for isolation; restrict exposed ports per Category 8 hardening

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
const result = await openclaw.skill.run('network-topology-design', { ... });
```

## Related Skills

- `container-lifecycle-manager`
- `reverse-proxy-integration`
 * @param {string} params.network_mode - bridge|host
 * @param {Array} params.port_mappings - Port mapping configuration
