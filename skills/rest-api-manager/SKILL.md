---
name: RESTful API Manager
version: 1.0.0
description: Manage internal API patterns and external service integration with rate limiting
author: OpenClaw SysAdmin Community
tags: [3, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  endpoint:
    type: string
    description: API endpoint
    required: True
  method:
    type: string
    description: HTTP method
    required: True
  payload:
    type: object
    description: Request payload
    required: False
output:
  status: string
  details: object
  response: object
dependencies:
  - openclaw/gateway
  - axios
security:
  - Rate limiting per Category 8; validate SSL certificates; webhook signature verification
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# RESTful API Manager

## Description

Manage internal API patterns and external service integration with rate limiting

## Source Reference

This skill is derived from **3. API Gateway & External Communication** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: RESTful API Design & Consumption

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `endpoint` | string | Yes | API endpoint |
| `method` | string | Yes | HTTP method |
| `payload` | object | No | Request payload |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "response": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('rest-api-manager', {
  endpoint: "value",
  method: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('rest-api-manager', {
  endpoint: "value",
  method: "value",
  payload: {}
});
```

## Security Considerations

Rate limiting per Category 8; validate SSL certificates; webhook signature verification

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
const result = await openclaw.skill.run('rest-api-manager', { ... });
```

## Related Skills

- `webhook-manager`
- `rate-limit-enforcer`
 * @param {string} params.endpoint - API endpoint
 * @param {string} params.method - HTTP method
 * @param {Object} params.payload - Request payload
