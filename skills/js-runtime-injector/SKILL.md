---
name: JS/TS Runtime Injector
version: 1.0.0
description: Inject custom UI scripts for runtime customization
author: OpenClaw SysAdmin Community
tags: [7, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  script_path:
    type: string
    description: Script to inject
    required: True
  context:
    type: object
    description: Execution context
    required: False
output:
  status: string
  details: object
  injection_result: any
dependencies:
  - openclaw/fs
  - vm2|isolated-vm
security:
  - Sandbox all injected code per Category 8; prevent code injection attacks
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# JS/TS Runtime Injector

## Description

Inject custom UI scripts for runtime customization

## Source Reference

This skill is derived from **7. User Interface & Experience Layer** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: JavaScript/TypeScript Runtime Injection

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `script_path` | string | Yes | Script to inject |
| `context` | object | No | Execution context |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "injection_result": <any>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('js-runtime-injector', {
  script_path: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('js-runtime-injector', {
  script_path: "value",
  context: {}
});
```

## Security Considerations

Sandbox all injected code per Category 8; prevent code injection attacks

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
const result = await openclaw.skill.run('js-runtime-injector', { ... });
```

## Related Skills

- `sandbox-manager`
- `cli-autocomplete-manager`
 * @param {string} params.script_path - Script to inject
 * @param {Object} params.context - Execution context
