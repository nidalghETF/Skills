---
name: Deployment Pattern Applier
version: 1.0.0
description: Apply canonical deployment patterns: Mac mini local-first, Isolated VPS, Cloudflare Moltworker, Docker Model Runner
author: OpenClaw SysAdmin Community
tags: [16, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  pattern:
    type: string
    description: macmini|vps|cloudflare|docker
    required: True
  security_focus:
    type: boolean
    description: Security-first deployment
    required: False
output:
  status: string
  details: object
  deployment_config: object
dependencies:
  - openclaw/config
  - openclaw/exec
security:
  - Each pattern includes security recommendations per Category 8; harden per scenario
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Deployment Pattern Applier

## Description

Apply canonical deployment patterns: Mac mini local-first, Isolated VPS, Cloudflare Moltworker, Docker Model Runner

## Source Reference

This skill is derived from **16. Best Practices & Pattern Repository** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Deployment Patterns

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `pattern` | string | Yes | macmini|vps|cloudflare|docker |
| `security_focus` | boolean | No | Security-first deployment |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "deployment_config": <object>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('deployment-pattern-applier', {
  pattern: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('deployment-pattern-applier', {
  pattern: "value",
  security_focus: true
});
```

## Security Considerations

Each pattern includes security recommendations per Category 8; harden per scenario

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
const result = await openclaw.skill.run('deployment-pattern-applier', { ... });
```

## Related Skills

- `deployment-scenario-analyzer`
- `threat-model-analyzer`
 * @param {string} params.pattern - macmini|vps|cloudflare|docker
 * @param {boolean} params.security_focus - Security-first deployment
