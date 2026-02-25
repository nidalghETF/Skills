---
name: CLI Autocomplete Manager
version: 1.0.0
description: Manage Commander.js CLI with @clack/prompts integration and autocompletion
author: OpenClaw SysAdmin Community
tags: [7, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  action:
    type: string
    description: generate|install|update
    required: True
  shell:
    type: string
    description: bash|zsh|fish
    required: False
output:
  status: string
  details: object
  completion_path: string
dependencies:
  - openclaw/cli
  - commander
security:
  - Validate shell scripts per Category 8; prevent injection in completions
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# CLI Autocomplete Manager

## Description

Manage Commander.js CLI with @clack/prompts integration and autocompletion

## Source Reference

This skill is derived from **7. User Interface & Experience Layer** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: CLI Command Structure & Autocompletion

**Complexity**: low

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | generate|install|update |
| `shell` | string | No | bash|zsh|fish |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "completion_path": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('cli-autocomplete-manager', {
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('cli-autocomplete-manager', {
  action: "value",
  shell: "value"
});
```

## Security Considerations

Validate shell scripts per Category 8; prevent injection in completions

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
const result = await openclaw.skill.run('cli-autocomplete-manager', { ... });
```

## Related Skills

- `tui-manager`
- `rich-formatter`
 * @param {string} params.action - generate|install|update
 * @param {string} params.shell - bash|zsh|fish
