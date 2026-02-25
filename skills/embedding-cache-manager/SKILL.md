---
name: Embedding Cache Manager
version: 1.0.0
description: Optimize embedding cache with hybrid search (semantic + keyword)
author: OpenClaw SysAdmin Community
tags: [9, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 */12 * * *"
  enabled: true
input:
  action:
    type: string
    description: warm|clear|stats|optimize
    required: True
  cache_size:
    type: number
    description: Max cache entries
    required: False
output:
  status: string
  details: object
  cache_stats: object
dependencies:
  - openclaw/vector
  - openclaw/cache
security:
  - Cache isolation; prevent cache poisoning; secure cache keys per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Embedding Cache Manager

## Description

Optimize embedding cache with hybrid search (semantic + keyword)

## Source Reference

This skill is derived from **9. Data Persistence & Knowledge Management** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Embedding Cache Management & Hybrid Search

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | warm|clear|stats|optimize |
| `cache_size` | number | No | Max cache entries |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "cache_stats": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('embedding-cache-manager', {
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('embedding-cache-manager', {
  action: "value",
  cache_size: 123
});
```

## Security Considerations

Cache isolation; prevent cache poisoning; secure cache keys per Category 8

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
const result = await openclaw.skill.run('embedding-cache-manager', { ... });
```

## Related Skills

- `vector-store-manager`
- `cache-layer-manager`
 * @param {string} params.action - warm|clear|stats|optimize
 * @param {number} params.cache_size - Max cache entries
