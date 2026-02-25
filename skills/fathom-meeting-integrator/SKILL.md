---
name: Fathom Meeting Integrator
version: 1.0.0
description: Integrate with Fathom for meeting transcription and follow-up
author: OpenClaw SysAdmin Community
tags: [18, sysadmin, cron]
trigger:
  type: cron
  schedule: "*/20 * * * *"
  enabled: true
input:
  meeting_id:
    type: string
    description: Meeting to process
    required: False
  auto_followup:
    type: boolean
    description: Auto-generate follow-up
    required: False
output:
  status: string
  details: object
  transcript_url: string
dependencies:
  - openclaw/http
  - fathom-api
security:
  - Secure Fathom API key per Category 8; meeting privacy protection
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Fathom Meeting Integrator

## Description

Integrate with Fathom for meeting transcription and follow-up

## Source Reference

This skill is derived from **18. Third-Party Ecosystem Integrations** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Integrations (from PRD)

**Complexity**: medium

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `meeting_id` | string | No | Meeting to process |
| `auto_followup` | boolean | No | Auto-generate follow-up |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "transcript_url": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('fathom-meeting-integrator', {
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('fathom-meeting-integrator', {
  meeting_id: "value",
  auto_followup: true
});
```

## Security Considerations

Secure Fathom API key per Category 8; meeting privacy protection

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
const result = await openclaw.skill.run('fathom-meeting-integrator', { ... });
```

## Related Skills

- `calendar-scheduler`
- `speech-to-text-manager`
 * @param {string} params.meeting_id - Meeting to process
 * @param {boolean} params.auto_followup - Auto-generate follow-up
