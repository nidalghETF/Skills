---
name: Tool Calling Protocol
version: 1.0.0
description: Manage function calling integration with LLMs for skill execution
author: OpenClaw SysAdmin Community
tags: [5, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  function_name:
    type: string
    description: Function to call
    required: True
  parameters:
    type: object
    description: Function parameters
    required: True
output:
  status: string
  details: object
  result: any
dependencies:
  - openclaw/gateway
  - openclaw/llm
security:
  - Validate function parameters per Category 8; prevent unauthorized function calls
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Tool Calling Protocol

## Description

Manage function calling integration with LLMs for skill execution

## Source Reference

This skill is derived from **5. Skill Ecosystem & Extensibility** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Tool Calling Protocol

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `function_name` | string | Yes | Function to call |
| `parameters` | object | Yes | Function parameters |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "result": <any>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('tool-calling-protocol', {
  function_name: "value",
  parameters: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('tool-calling-protocol', {
  function_name: "value",
  parameters: {}
});
```

## Security Considerations

Validate function parameters per Category 8; prevent unauthorized function calls

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
const result = await openclaw.skill.run('tool-calling-protocol', { ... });
```

## Related Skills

- `dynamic-skill-loader`
- `input-sanitization-filter`
 * @param {string} params.function_name - Function to call
 * @param {Object} params.parameters - Function parameters
