---
name: Secret Rotation Automation
version: 1.0.0
description: Automate credential rotation for API keys, tokens, and passwords
author: OpenClaw SysAdmin Community
tags: [8, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 0 1 * *"
  enabled: true
input:
  secret_type:
    type: string
    description: api_key|token|password
    required: True
  provider:
    type: string
    description: Service provider
    required: True
  dry_run:
    type: boolean
    description: Simulate rotation
    required: False
output:
  status: string
  details: object
  new_secret_hash: string
dependencies:
  - openclaw/fs
  - openclaw/notify
  - crypto
security:
  - Store secrets in ~/.openclaw/credentials/; encrypt at rest; audit all rotations; use least privilege
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Secret Rotation Automation

## Description

Automate credential rotation for API keys, tokens, and passwords

## Source Reference

This skill is derived from **8. Security & Hardening Matrix** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Secret Rotation Automation

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `secret_type` | string | Yes | api_key|token|password |
| `provider` | string | Yes | Service provider |
| `dry_run` | boolean | No | Simulate rotation |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "new_secret_hash": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('secret-rotation', {
  secret_type: "value",
  provider: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('secret-rotation', {
  secret_type: "value",
  provider: "value",
  dry_run: true
});
```

## Security Considerations

Store secrets in ~/.openclaw/credentials/; encrypt at rest; audit all rotations; use least privilege

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
const result = await openclaw.skill.run('secret-rotation', { ... });
```

## Related Skills

- `api-key-manager`
- `security-audit-runner`
 * @param {string} params.secret_type - api_key|token|password
 * @param {string} params.provider - Service provider
 * @param {boolean} params.dry_run - Simulate rotation
