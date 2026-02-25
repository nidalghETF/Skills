---
name: Configuration Migration Runner
version: 1.0.0
description: Automate configuration updates during version upgrades
author: OpenClaw SysAdmin Community
tags: [13, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  from_version:
    type: string
    description: Source version
    required: True
  to_version:
    type: string
    description: Target version
    required: True
  config_path:
    type: string
    description: Config file path
    required: True
output:
  status: string
  details: object
  migrated_config: object
dependencies:
  - openclaw/fs
  - openclaw/config
security:
  - Backup before migration; validate migrated config per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Configuration Migration Runner

## Description

Automate configuration updates during version upgrades

## Source Reference

This skill is derived from **13. Upgrade & Lifecycle Management** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Configuration Migration Scripts

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `from_version` | string | Yes | Source version |
| `to_version` | string | Yes | Target version |
| `config_path` | string | Yes | Config file path |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "migrated_config": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('config-migration-runner', {
  from_version: "value",
  to_version: "value",
  config_path: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('config-migration-runner', {
  from_version: "value",
  to_version: "value",
  config_path: "value"
});
```

## Security Considerations

Backup before migration; validate migrated config per Category 8

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
const result = await openclaw.skill.run('config-migration-runner', { ... });
```

## Related Skills

- `breaking-change-detector`
- `schema-migration-manager`
 * @param {string} params.from_version - Source version
 * @param {string} params.to_version - Target version
 * @param {string} params.config_path - Config file path
