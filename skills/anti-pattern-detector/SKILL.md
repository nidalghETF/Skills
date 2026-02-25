---
name: Anti-Pattern Detector
version: 1.0.0
description: Detect and warn about common anti-patterns in configuration and code
author: OpenClaw SysAdmin Community
tags: [16, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  scan_target:
    type: string
    description: Path to scan
    required: True
  strictness:
    type: string
    description: lenient|normal|strict
    required: False
output:
  status: string
  details: object
  anti_patterns: array
dependencies:
  - openclaw/config
  - openclaw/fs
security:
  - Security anti-patterns prioritized per Category 8; validate scan targets
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Anti-Pattern Detector

## Description

Detect and warn about common anti-patterns in configuration and code

## Source Reference

This skill is derived from **16. Best Practices & Pattern Repository** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Anti-Pattern Detection Rules

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `scan_target` | string | Yes | Path to scan |
| `strictness` | string | No | lenient|normal|strict |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "anti_patterns": <array>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('anti-pattern-detector', {
  scan_target: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('anti-pattern-detector', {
  scan_target: "value",
  strictness: "value"
});
```

## Security Considerations

Security anti-patterns prioritized per Category 8; validate scan targets

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
const result = await openclaw.skill.run('anti-pattern-detector', { ... });
```

## Related Skills

- `security-audit-runner`
- `config-pattern-library`
 * @param {string} params.scan_target - Path to scan
 * @param {string} params.strictness - lenient|normal|strict
