---
name: CRM Connector Suite
version: 1.0.0
description: Integrate with Dex CRM and Apollo.io for contact management
author: OpenClaw SysAdmin Community
tags: [18, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  crm_type:
    type: string
    description: dex|apollo|salesforce
    required: True
  action:
    type: string
    description: sync|enrich|export
    required: True
output:
  status: string
  details: object
  synced_records: number
dependencies:
  - openclaw/http
  - crm-api
security:
  - Secure CRM credentials per Category 8; encrypt contact data; API key rotation
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# CRM Connector Suite

## Description

Integrate with Dex CRM and Apollo.io for contact management

## Source Reference

This skill is derived from **18. Third-Party Ecosystem Integrations** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: CRM Connector Suite

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `crm_type` | string | Yes | dex|apollo|salesforce |
| `action` | string | Yes | sync|enrich|export |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "synced_records": <number>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('crm-connector', {
  crm_type: "value",
  action: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('crm-connector', {
  crm_type: "value",
  action: "value"
});
```

## Security Considerations

Secure CRM credentials per Category 8; encrypt contact data; API key rotation

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
const result = await openclaw.skill.run('crm-connector', { ... });
```

## Related Skills

- `google-workspace-integrator`
- `calendar-scheduler`
 * @param {string} params.crm_type - dex|apollo|salesforce
 * @param {string} params.action - sync|enrich|export
