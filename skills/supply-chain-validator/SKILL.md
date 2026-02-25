---
name: Supply Chain Validator
version: 1.0.0
description: Validate skill vetting and dependency verification for supply chain security
author: OpenClaw SysAdmin Community
tags: [8, sysadmin, cron]
trigger:
  type: cron
  schedule: "0 4 * * *"
  enabled: true
input:
  skill_id:
    type: string
    description: Skill to validate
    required: True
  verify_signature:
    type: boolean
    description: Verify signatures
    required: False
output:
  status: string
  details: object
  supply_chain_valid: boolean
dependencies:
  - openclaw/fs
  - sigstore|cosign
security:
  - AMOS Stealer on macOS via 3+ skills per Bitdefender; verify all dependencies; signature verification
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Supply Chain Validator

## Description

Validate skill vetting and dependency verification for supply chain security

## Source Reference

This skill is derived from **8. Security & Hardening Matrix** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Supply Chain Security

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `skill_id` | string | Yes | Skill to validate |
| `verify_signature` | boolean | No | Verify signatures |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "supply_chain_valid": <boolean>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('supply-chain-validator', {
  skill_id: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('supply-chain-validator', {
  skill_id: "value",
  verify_signature: true
});
```

## Security Considerations

AMOS Stealer on macOS via 3+ skills per Bitdefender; verify all dependencies; signature verification

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
const result = await openclaw.skill.run('supply-chain-validator', { ... });
```

## Related Skills

- `bitdefender-skills-checker`
- `dependency-resolver`
 * @param {string} params.skill_id - Skill to validate
 * @param {boolean} params.verify_signature - Verify signatures
