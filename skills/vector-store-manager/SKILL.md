---
name: Vector Store Manager
version: 1.0.0
description: Manage SQLite-vec and LanceDB for embedding storage and retrieval
author: OpenClaw SysAdmin Community
tags: [9, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  action:
    type: string
    description: insert|search|delete|optimize
    required: True
  vectors:
    type: array
    description: Vectors to store
    required: False
  query_vector:
    type: array
    description: Search query
    required: False
output:
  status: string
  details: object
  results: array
dependencies:
  - openclaw/vector
  - sqlite-vec
  - lancedb
security:
  - Validate vector dimensions; access controls; encryption at rest per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Vector Store Manager

## Description

Manage SQLite-vec and LanceDB for embedding storage and retrieval

## Source Reference

This skill is derived from **9. Data Persistence & Knowledge Management** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Vector Store Operations

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | insert|search|delete|optimize |
| `vectors` | array | No | Vectors to store |
| `query_vector` | array | No | Search query |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "results": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('vector-store-manager', {
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('vector-store-manager', {
  action: "value",
  vectors: [],
  query_vector: []
});
```

## Security Considerations

Validate vector dimensions; access controls; encryption at rest per Category 8

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
const result = await openclaw.skill.run('vector-store-manager', { ... });
```

## Related Skills

- `embedding-model-manager`
- `embedding-cache-manager`
 * @param {string} params.action - insert|search|delete|optimize
 * @param {Array} params.vectors - Vectors to store
 * @param {Array} params.query_vector - Search query
