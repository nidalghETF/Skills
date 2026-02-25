---
name: gRPC Service Manager
version: 1.0.0
description: Manage high-performance gRPC services for inter-service communication
author: OpenClaw SysAdmin Community
tags: [3, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  service_name:
    type: string
    description: gRPC service name
    required: True
  action:
    type: string
    description: status|restart|configure
    required: True
output:
  status: string
  details: object
  service_status: string
dependencies:
  - openclaw/gateway
  - @grpc/grpc-js
security:
  - mTLS authentication per Category 8; certificate validation; service mesh integration
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# gRPC Service Manager

## Description

Manage high-performance gRPC services for inter-service communication

## Source Reference

This skill is derived from **3. API Gateway & External Communication** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: gRPC for Inter-Service Communication

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `service_name` | string | Yes | gRPC service name |
| `action` | string | Yes | status|restart|configure |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "service_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('grpc-service-manager', {
  service_name: "value",
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('grpc-service-manager', {
  service_name: "value",
  action: "value"
});
```

## Security Considerations

mTLS authentication per Category 8; certificate validation; service mesh integration

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
const result = await openclaw.skill.run('grpc-service-manager', { ... });
```

## Related Skills

- `websocket-server-manager`
- `zero-trust-config`
 * @param {string} params.service_name - gRPC service name
 * @param {string} params.action - status|restart|configure
