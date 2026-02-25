---
name: AGENTS.md Designer
version: 1.0.0
description: Create AGENTS.md for agent behavior definition and operating instructions
author: OpenClaw SysAdmin Community
tags: [19, sysadmin, chat]
trigger:
  type: chat
  schedule: ""
  enabled: true
input:
  agent_name:
    type: string
    description: Agent name
    required: True
  capabilities:
    type: array
    description: Agent capabilities
    required: True
  restrictions:
    type: array
    description: Agent restrictions
    required: False
output:
  status: string
  details: object
  agents_md_content: string
dependencies:
  - openclaw/fs
  - openclaw/config
security:
  - Security boundaries in AGENTS.md per Category 8; validate all instructions
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# AGENTS.md Designer

## Description

Create AGENTS.md for agent behavior definition and operating instructions

## Source Reference

This skill is derived from **19. Prompt Engineering & System Instructions** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: AGENTS.md Operating Instructions Design

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `agent_name` | string | Yes | Agent name |
| `capabilities` | array | Yes | Agent capabilities |
| `restrictions` | array | No | Agent restrictions |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "agents_md_content": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('agents-md-designer', {
  agent_name: "value",
  capabilities: 123
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('agents-md-designer', {
  agent_name: "value",
  capabilities: [],
  restrictions: []
});
```

## Security Considerations

Security boundaries in AGENTS.md per Category 8; validate all instructions

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
const result = await openclaw.skill.run('agents-md-designer', { ... });
```

## Related Skills

- `system-prompt-architect`
- `tools-md-designer`
 * @param {string} params.agent_name - Agent name
 * @param {Array} params.capabilities - Agent capabilities
 * @param {Array} params.restrictions - Agent restrictions
