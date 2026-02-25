---
name: DevOps Platform Integrator
version: 1.0.0
description: Integrate with GitHub, Linear, and Jira for development workflow
author: OpenClaw SysAdmin Community
tags: [18, sysadmin, event]
trigger:
  type: event
  schedule: ""
  enabled: true
input:
  platform:
    type: string
    description: github|linear|jira
    required: True
  action:
    type: string
    description: create_issue|update_status|sync
    required: True
output:
  status: string
  details: object
  issue_url: string
dependencies:
  - openclaw/http
  - github-api|linear-sdk|jira-client
security:
  - Secure platform tokens per Category 8; validate webhook signatures
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# DevOps Platform Integrator

## Description

Integrate with GitHub, Linear, and Jira for development workflow

## Source Reference

This skill is derived from **18. Third-Party Ecosystem Integrations** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: DevOps Platform Integration

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `platform` | string | Yes | github|linear|jira |
| `action` | string | Yes | create_issue|update_status|sync |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "issue_url": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('devops-platform-integrator', {
  platform: "value",
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('devops-platform-integrator', {
  platform: "value",
  action: "value"
});
```

## Security Considerations

Secure platform tokens per Category 8; validate webhook signatures

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
const result = await openclaw.skill.run('devops-platform-integrator', { ... });
```

## Related Skills

- `webhook-manager`
- `event-trigger-manager`
 * @param {string} params.platform - github|linear|jira
 * @param {string} params.action - create_issue|update_status|sync
