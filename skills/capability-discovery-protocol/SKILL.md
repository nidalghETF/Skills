---
name: Capability Discovery Protocol
version: 1.0.0
description: Implement self-describing APIs for capability discovery
author: OpenClaw SysAdmin Community
tags: [17, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  agent_id:
    type: string
    description: Agent to query
    required: False
output:
  status: string
  details: object
  capabilities: array
dependencies:
  - openclaw/gateway
  - openclaw/config
security:
  - Secure capability disclosure; prevent information leakage per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Capability Discovery Protocol

## Description

Implement self-describing APIs for capability discovery

## Source Reference

This skill is derived from **17. Feature Utilization & Capability Discovery** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Capability Discovery Protocols

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `agent_id` | string | No | Agent to query |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "capabilities": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('capability-discovery-protocol', {
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('capability-discovery-protocol', {
  agent_id: "value"
});
```

## Security Considerations

Secure capability disclosure; prevent information leakage per Category 8

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
const result = await openclaw.skill.run('capability-discovery-protocol', { ... });
```

## Related Skills

- `feature-capability-mapper`
- `skills-discovery`
 * @param {string} params.agent_id - Agent to query
