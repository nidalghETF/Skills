---
name: Offline-First Architect
version: 1.0.0
description: Design disconnected operation with local inference and sync-on-connect
author: OpenClaw SysAdmin Community
tags: [22, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  sync_strategy:
    type: string
    description: immediate|batched|manual
    required: True
  local_storage_limit:
    type: number
    description: Max local storage MB
    required: False
output:
  status: string
  details: object
  offline_config: object
dependencies:
  - openclaw/gateway
  - local-model-deployer
security:
  - Local data security per Category 8; encryption at rest; secure sync
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Offline-First Architect

## Description

Design disconnected operation with local inference and sync-on-connect

## Source Reference

This skill is derived from **22. Edge & IoT Deployment** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Offline-First Architecture Design

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `sync_strategy` | string | Yes | immediate|batched|manual |
| `local_storage_limit` | number | No | Max local storage MB |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "offline_config": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('offline-first-architect', {
  sync_strategy: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('offline-first-architect', {
  sync_strategy: "value",
  local_storage_limit: 123
});
```

## Security Considerations

Local data security per Category 8; encryption at rest; secure sync

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
const result = await openclaw.skill.run('offline-first-architect', { ... });
```

## Related Skills

- `arm-optimizer`
- `local-model-deployer`
 * @param {string} params.sync_strategy - immediate|batched|manual
 * @param {number} params.local_storage_limit - Max local storage MB
