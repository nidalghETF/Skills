---
name: Rate Limit Enforcer
version: 1.0.0
description: Enforce API rate limits with intelligent backoff strategies
author: OpenClaw SysAdmin Community
tags: [3, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  endpoint:
    type: string
    description: API endpoint to protect
    required: True
  limit:
    type: number
    description: Requests per window
    required: True
  window:
    type: number
    description: Time window in seconds
    required: True
output:
  status: string
  details: object
  current_usage: number
dependencies:
  - openclaw/gateway
  - rate-limiter-flexible
security:
  - Distributed rate limiting; prevent rate limit bypass per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Rate Limit Enforcer

## Description

Enforce API rate limits with intelligent backoff strategies

## Source Reference

This skill is derived from **3. API Gateway & External Communication** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Rate Limit Enforcement & Backoff Strategies

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `endpoint` | string | Yes | API endpoint to protect |
| `limit` | number | Yes | Requests per window |
| `window` | number | Yes | Time window in seconds |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "current_usage": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('rate-limit-enforcer', {
  endpoint: "value",
  limit: 123,
  window: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('rate-limit-enforcer', {
  endpoint: "value",
  limit: 123,
  window: 123
});
```

## Security Considerations

Distributed rate limiting; prevent rate limit bypass per Category 8

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
const result = await openclaw.skill.run('rate-limit-enforcer', { ... });
```

## Related Skills

- `rest-api-manager`
- `security-audit-runner`
 * @param {string} params.endpoint - API endpoint to protect
 * @param {number} params.limit - Requests per window
 * @param {number} params.window - Time window in seconds
