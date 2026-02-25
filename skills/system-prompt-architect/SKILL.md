---
name: System Prompt Architect
version: 1.0.0
description: Design and assemble effective system prompts for agent behavior
author: OpenClaw SysAdmin Community
tags: [19, sysadmin, chat]
trigger:
  type: chat
  schedule: ""
  enabled: true
input:
  agent_purpose:
    type: string
    description: Agent's purpose
    required: True
  constraints:
    type: array
    description: Behavior constraints
    required: False
output:
  status: string
  details: object
  system_prompt: string
dependencies:
  - openclaw/llm
  - openclaw/config
security:
  - Prompt injection defense per Category 8; validate prompt content; no secrets in prompts
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# System Prompt Architect

## Description

Design and assemble effective system prompts for agent behavior

## Source Reference

This skill is derived from **19. Prompt Engineering & System Instructions** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: System Prompt Architecture & Assembly

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `agent_purpose` | string | Yes | Agent's purpose |
| `constraints` | array | No | Behavior constraints |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "system_prompt": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('system-prompt-architect', {
  agent_purpose: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('system-prompt-architect', {
  agent_purpose: "value",
  constraints: []
});
```

## Security Considerations

Prompt injection defense per Category 8; validate prompt content; no secrets in prompts

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
const result = await openclaw.skill.run('system-prompt-architect', { ... });
```

## Related Skills

- `agents-md-designer`
- `soul-md-designer`
 * @param {string} params.agent_purpose - Agent's purpose
 * @param {Array} params.constraints - Behavior constraints
