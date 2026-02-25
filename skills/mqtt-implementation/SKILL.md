---
name: MQTT Protocol Implementation
version: 1.0.0
description: Implement lightweight MQTT messaging for IoT communication
author: OpenClaw SysAdmin Community
tags: [22, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  broker_url:
    type: string
    description: MQTT broker URL
    required: True
  topic:
    type: string
    description: MQTT topic
    required: True
  qos:
    type: number
    description: QoS level 0|1|2
    required: False
output:
  status: string
  details: object
  subscription_id: string
dependencies:
  - openclaw/gateway
  - mqtt
security:
  - MQTT TLS per Category 8; client authentication; topic access controls
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# MQTT Protocol Implementation

## Description

Implement lightweight MQTT messaging for IoT communication

## Source Reference

This skill is derived from **22. Edge & IoT Deployment** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: MQTT Protocol Implementation

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `broker_url` | string | Yes | MQTT broker URL |
| `topic` | string | Yes | MQTT topic |
| `qos` | number | No | QoS level 0|1|2 |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "subscription_id": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('mqtt-implementation', {
  broker_url: "value",
  topic: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('mqtt-implementation', {
  broker_url: "value",
  topic: "value",
  qos: 123
});
```

## Security Considerations

MQTT TLS per Category 8; client authentication; topic access controls

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
const result = await openclaw.skill.run('mqtt-implementation', { ... });
```

## Related Skills

- `sensor-integrator`
- `edge-ai-gateway`
 * @param {string} params.broker_url - MQTT broker URL
 * @param {string} params.topic - MQTT topic
 * @param {number} params.qos - QoS level 0|1|2
