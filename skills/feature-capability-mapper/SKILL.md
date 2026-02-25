---
name: Feature Capability Mapper
version: 1.0.0
description: Map and inventory all OpenClaw features and capabilities
author: OpenClaw SysAdmin Community
tags: [17, sysadmin, chat]
trigger:
  type: chat
  schedule: ""
  enabled: true
input:
  version:
    type: string
    description: OpenClaw version
    required: False
  detail_level:
    type: string
    description: basic|detailed|exhaustive
    required: False
output:
  status: string
  details: object
  feature_map: object
dependencies:
  - openclaw/gateway
  - openclaw/config
security:
  - Secure feature discovery; prevent feature enumeration attacks per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Feature Capability Mapper

## Description

Map and inventory all OpenClaw features and capabilities

## Source Reference

This skill is derived from **17. Feature Utilization & Capability Discovery** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Core Feature Capability Mapping

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `version` | string | No | OpenClaw version |
| `detail_level` | string | No | basic|detailed|exhaustive |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "feature_map": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('feature-capability-mapper', {
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('feature-capability-mapper', {
  version: "value",
  detail_level: "value"
});
```

## Security Considerations

Secure feature discovery; prevent feature enumeration attacks per Category 8

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
const result = await openclaw.skill.run('feature-capability-mapper', { ... });
```

## Related Skills

- `skills-discovery`
- `feature-flag-manager`
 * @param {string} params.version - OpenClaw version
 * @param {string} params.detail_level - basic|detailed|exhaustive
