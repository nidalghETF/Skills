---
name: Bitdefender Skills Checker
version: 1.0.0
description: Pre-deployment security validation scanning for backdoors, data exfiltration, and prompt injection
author: OpenClaw SysAdmin Community
tags: [8, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  skill_path:
    type: string
    description: Skill to check
    required: True
  deep_scan:
    type: boolean
    description: Enable deep analysis
    required: False
output:
  status: string
  details: object
  malicious_detected: boolean
  threats: array
dependencies:
  - openclaw/exec
  - bitdefender-api
security:
  - 54% crypto-related malicious skills; 91.92.242.30 infrastructure pattern; essential pre-deployment step
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Bitdefender Skills Checker

## Description

Pre-deployment security validation scanning for backdoors, data exfiltration, and prompt injection

## Source Reference

This skill is derived from **8. Security & Hardening Matrix** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Bitdefender AI Skills Checker

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `skill_path` | string | Yes | Skill to check |
| `deep_scan` | boolean | No | Enable deep analysis |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "malicious_detected": <boolean>,
  "threats": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('bitdefender-skills-checker', {
  skill_path: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('bitdefender-skills-checker', {
  skill_path: "value",
  deep_scan: true
});
```

## Security Considerations

54% crypto-related malicious skills; 91.92.242.30 infrastructure pattern; essential pre-deployment step

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
const result = await openclaw.skill.run('bitdefender-skills-checker', { ... });
```

## Related Skills

- `vulnerability-scanner`
- `supply-chain-validator`
 * @param {string} params.skill_path - Skill to check
 * @param {boolean} params.deep_scan - Enable deep analysis
