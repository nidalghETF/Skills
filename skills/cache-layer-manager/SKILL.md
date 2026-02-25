---
name: Caching Layer Manager
version: 1.0.0
description: Manage in-memory and disk-backed caches with TTL and eviction policies
author: OpenClaw SysAdmin Community
tags: [1, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 */6 * * *"
  enabled: true
input:
  action:
    type: string
    description: clear|stats|optimize
    required: True
  cache_type:
    type: string
    description: memory|disk|all
    required: False
output:
  status: string
  details: object
  bytes_freed: number
dependencies:
  - openclaw/fs
  - node-cache
security:
  - Sanitize cache keys to prevent injection; validate cached data before use
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Caching Layer Manager

## Description

Manage in-memory and disk-backed caches with TTL and eviction policies

## Source Reference

This skill is derived from **1. Foundation & Core Architecture** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Caching Layer Management

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | clear|stats|optimize |
| `cache_type` | string | No | memory|disk|all |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "bytes_freed": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('cache-layer-manager', {
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('cache-layer-manager', {
  action: "value",
  cache_type: "value"
});
```

## Security Considerations

Sanitize cache keys to prevent injection; validate cached data before use

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
const result = await openclaw.skill.run('cache-layer-manager', { ... });
```

## Related Skills

- `memory-leak-detection`
- `performance-bottleneck-id`
 * @param {string} params.action - clear|stats|optimize
 * @param {string} params.cache_type - memory|disk|all
