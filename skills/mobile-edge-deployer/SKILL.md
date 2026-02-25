---
name: Mobile Edge Deployer
version: 1.0.0
description: Deploy to iOS/Android nodes with local inference capability
author: OpenClaw SysAdmin Community
tags: [22, sysadmin, manual]
trigger:
  type: manual
  schedule: ""
  enabled: true
input:
  platform:
    type: string
    description: ios|android
    required: True
  model_path:
    type: string
    description: Mobile model file
    required: True
  enable_voice_wake:
    type: boolean
    description: Enable Voice Wake
    required: False
output:
  status: string
  details: object
  deployment_status: string
dependencies:
  - openclaw/mobile
  - tensorflow-lite|coreml
security:
  - Mobile security per Category 8; app sandbox; secure model storage; Voice Wake privacy
  - Validate all inputs per Category 8
  - Use least privilege principle
  - Log all operations for audit
---

# Mobile Edge Deployer

## Description

Deploy to iOS/Android nodes with local inference capability

## Source Reference

This skill is derived from **22. Edge & IoT Deployment** of the OpenClaw Agent Mastery Index v4.1.

**Sub-heading**: Mobile Edge Deployment

**Complexity**: high

## Input Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `platform` | string | Yes | ios|android |
| `model_path` | string | Yes | Mobile model file |
| `enable_voice_wake` | boolean | No | Enable Voice Wake |

## Output Format

```json
{
  "status": <string>,
  "details": <object>,
  "deployment_status": <string>
}
```

## Usage Examples

### Example 1: Basic Usage

```javascript
const result = await openclaw.skill.run('mobile-edge-deployer', {
  platform: "value",
  model_path: "value"
});
```

### Example 2: With Optional Parameters

```javascript
const result = await openclaw.skill.run('mobile-edge-deployer', {
  platform: "value",
  model_path: "value",
  enable_voice_wake: true
});
```

## Security Considerations

Mobile security per Category 8; app sandbox; secure model storage; Voice Wake privacy

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
const result = await openclaw.skill.run('mobile-edge-deployer', { ... });
```

## Related Skills

- `realtime-voice-mode`
- `arm-optimizer`
 * @param {string} params.platform - ios|android
 * @param {string} params.model_path - Mobile model file
 * @param {boolean} params.enable_voice_wake - Enable Voice Wake
