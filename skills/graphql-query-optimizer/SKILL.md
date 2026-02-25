---
name: GraphQL Query Optimizer
version: 1.0.0
description: Optimize GraphQL API patterns with query complexity analysis and caching
author: OpenClaw SysAdmin Community
tags: [3, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  query:
    type: string
    description: GraphQL query
    required: True
  analyze_only:
    type: boolean
    description: Analyze without executing
    required: False
output:
  status: string
  details: object
  complexity_score: number
dependencies:
  - openclaw/gateway
  - graphql
security:
  - Query depth limiting per Category 8; prevent introspection in production
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# GraphQL Query Optimizer

## Description

Optimize GraphQL API patterns with query complexity analysis and caching

## Source Reference

This skill is derived from **3. API Gateway & External Communication** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: GraphQL Query Optimization

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `query` | string | Yes | GraphQL query |
| `analyze_only` | boolean | No | Analyze without executing |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "complexity_score": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('graphql-query-optimizer', {
  query: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('graphql-query-optimizer', {
  query: "value",
  analyze_only: true
});
```

## Security Considerations

Query depth limiting per Category 8; prevent introspection in production

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
const result = await openclaw.skill.run('graphql-query-optimizer', { ... });
```

## Related Skills

- `rest-api-manager`
- `rate-limit-enforcer`
 * @param {string} params.query - GraphQL query
 * @param {boolean} params.analyze_only - Analyze without executing
