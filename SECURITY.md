# Security Guide

> **⚠️ CRITICAL SECURITY WARNING**
> 
> According to [Bitdefender research](https://securitybrief.co.uk/story/bitdefender-warns-openclaw-ai-skills-rife-with-malware):
> - **17%** of analyzed OpenClaw skills showed malicious behavior
> - **54%** of malicious skills were crypto-related
> - **AMOS Stealer** found on macOS via 3+ skills
> - Infrastructure pattern: `91.92.242.30`
>
> **ALWAYS scan skills with Bitdefender AI Skills Checker before deployment.**

---

## Security Architecture

This repository implements security controls based on **Category 8: Security & Hardening Matrix** from the OpenClaw Agent Mastery Index v4.1.

### Core Security Principles

1. **Zero Trust Architecture** - Verify every request, authenticate every service
2. **Least Privilege** - Minimal permissions for every skill
3. **Defense in Depth** - Multiple security layers
4. **Secure by Default** - Safe configurations out of the box
5. **Audit Everything** - Comprehensive logging and monitoring

---

## Security Skills (Priority 5 - Critical)

### Authentication & Authorization

| Skill | Purpose | Security Control |
|-------|---------|------------------|
| `secret-rotation` | Automated credential rotation | Prevents credential stuffing |
| `api-key-manager` | Secure API key lifecycle | Scoped permissions, encrypted storage |
| `jwt-validator` | JWT token validation | Signature verification, claims checking |
| `oauth2-oidc-flow` | OAuth2/OIDC implementation | PKCE, state validation |

### Input Protection

| Skill | Purpose | Security Control |
|-------|---------|------------------|
| `input-sanitization-filter` | Prompt injection defense | 27 documented attack patterns |
| `pii-detection-redactor` | PII protection | GDPR/CCPA compliance |

### Runtime Security

| Skill | Purpose | Security Control |
|-------|---------|------------------|
| `sandbox-security-manager` | Container isolation | Seccomp, AppArmor, non-root |
| `container-escape-prevention` | Prevent container breakout | Privilege restrictions |
| `rate-limit-enforcer` | DoS protection | Request throttling |

### Monitoring & Auditing

| Skill | Purpose | Security Control |
|-------|---------|------------------|
| `audit-log-aggregator` | Security event collection | Tamper-proof logs |
| `vulnerability-scanner` | Vulnerability detection | Trivy, Snyk, Bitdefender |
| `security-audit-runner` | Compliance checking | 50+ checks, 12 categories |

### Supply Chain

| Skill | Purpose | Security Control |
|-------|---------|------------------|
| `supply-chain-validator` | Dependency verification | Signature validation |
| `bitdefender-skills-checker` | Pre-deployment scanning | Malware detection |
| `bitdefender-predeploy-checker` | CI/CD integration | Automated scanning |

---

## Security Checklist

### Before Deployment

- [ ] Run `security-audit-runner --auto-fix`
- [ ] Scan all skills with `bitdefender-skills-checker`
- [ ] Validate container configurations
- [ ] Review network policies
- [ ] Check secret rotation schedule
- [ ] Verify audit logging is enabled

### Runtime Security

- [ ] Enable `rate-limit-enforcer`
- [ ] Configure `audit-log-aggregator`
- [ ] Set up `disk-space-monitor`
- [ ] Enable `health-check-automation`
- [ ] Schedule `vulnerability-scanner`

### Compliance

- [ ] Run `compliance-checker` for GDPR/CCPA
- [ ] Validate `data-retention-enforcer` policies
- [ ] Review `permission-boundary-validator` results
- [ ] Check `security-boundary-enforcer` status

---

## Security Incident Response

### Detection

```bash
# Check for anomalies
openclaw skill run audit-log-aggregator --timeframe 1h
openclaw skill run log-pattern-analyzer --patterns suspicious

# Monitor resource usage
openclaw skill run memory-leak-detector
openclaw skill run disk-space-monitor
```

### Response

```bash
# Isolate affected components
openclaw skill run sandbox-security-manager --action restrict

# Rotate compromised credentials
openclaw skill run secret-rotation --service compromised-service

# Run full security audit
openclaw skill run security-audit-runner --categories all
```

### Recovery

```bash
# Restore from verified backup
openclaw skill run disaster-recovery-manager --action restore

# Verify system integrity
openclaw skill run diagnostic-command-runner --command doctor
```

---

## Threat Model

### Gateway Host as Trust Boundary

The OpenClaw gateway host is the **primary trust boundary**. All security controls should focus on:

1. **Network perimeter** - Firewall, reverse proxy, TLS
2. **Process isolation** - Container sandboxing
3. **Data protection** - Encryption at rest and in transit
4. **Access control** - Authentication and authorization
5. **Monitoring** - Audit logs and anomaly detection

### Known Attack Vectors

| Vector | Mitigation |
|--------|------------|
| Prompt injection | `input-sanitization-filter` |
| Container escape | `container-escape-prevention` |
| Credential theft | `secret-rotation`, encrypted storage |
| Supply chain | `supply-chain-validator`, Bitdefender |
| DoS | `rate-limit-enforcer` |
| Data exfiltration | `audit-log-aggregator`, network policies |

---

## Reporting Security Issues

Please report security vulnerabilities to: **security@your-org.com**

Include:
- Skill ID affected
- Steps to reproduce
- Potential impact
- Suggested mitigation

---

## Security Resources

- [OpenClaw Security Documentation](https://github.com/centminmod/explain-openclaw#security-documentation)
- [Bitdefender AI Skills Checker](https://securitybrief.co.uk/story/bitdefender-warns-openclaw-ai-skills-rife-with-malware)
- [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

---

*Last updated: 2026-02-24*
*Based on OpenClaw Agent Mastery Index v4.1 - Category 8*
