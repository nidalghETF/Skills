---
name: Diagnostic Command Runner
version: 1.0.0
description: Run openclaw doctor --fix, status, health, and logs --local-time commands
author: OpenClaw SysAdmin Community
tags: [12, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  command:
    type: string
    description: doctor|status|health|logs
    required: True
  options:
    type: object
    description: Command options
    required: False
output:
  status: string
  details: object
  diagnostic_output: any
dependencies:
  - openclaw/exec
  - openclaw/gateway
security:
  - Validate diagnostic access; audit diagnostic runs per Category 8
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Diagnostic Command Runner

## Description

Run openclaw doctor --fix, status, health, and logs --local-time commands

## Source Reference

This skill is derived from **12. Diagnostics & Troubleshooting** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Diagnostic Commands

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `command` | string | Yes | doctor|status|health|logs |
| `options` | object | No | Command options |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "diagnostic_output": <any>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('diagnostic-command-runner', {
  command: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('diagnostic-command-runner', {
  command: "value",
  options: {}
});
```

## Security Considerations

Validate diagnostic access; audit diagnostic runs per Category 8

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
const result = await openclaw.skill.run('diagnostic-command-runner', { ... });
```

## Related Skills

- `health-check-automation`
- `security-audit-runner`
 * @param {string} params.command - doctor|status|health|logs
 * @param {Object} params.options - Command options
