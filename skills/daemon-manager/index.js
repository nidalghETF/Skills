/**
 * Daemon Manager
 * 
 * Source: OpenClaw Mastery Index v4.1 - 1. Foundation & Core Architecture
 * Sub-heading: Daemon Management
 * Priority: 5 (Critical)
 * Complexity: medium
 * 
 * Security: Use least privilege for daemon operations; validate service file paths
 */

const { exec } = require('openclaw/exec');
const { logger } = require('openclaw/logger');
const { validate } = require('openclaw/validator');
const { sendAlert } = require('openclaw/notify');
const fs = require('fs').promises;
const path = require('path');

/**
 * Manage OpenClaw daemon via launchd (macOS) or systemd (Linux) with auto-start configuration
 * 
 * @param {Object} params - Input parameters
 * @returns {Promise<Object>} Result with status and details
 */
module.exports = async (params = {}) => {
  const startTime = Date.now();

  try {
    logger.info(`[daemon-manager] Starting execution`, { params });

    // Input validation (Category 8 security)
    if (!params.action) {
      throw new Error(`Required parameter 'action' is missing`);
    }

    // Sanitize inputs (Category 8)
    const sanitized = validate.sanitize(params);

    // Main implementation
    // Reference: 1. Foundation & Core Architecture - Daemon Management

    // Daemon management
    const action = sanitized.action || 'status';
    const platform = sanitized.platform || process.platform;

    let command;
    switch (action) {
      case 'install':
        command = platform === 'darwin' 
          ? 'launchctl load ~/Library/LaunchAgents/openclaw.plist'
          : 'systemctl enable openclaw';
        break;
      case 'uninstall':
        command = platform === 'darwin'
          ? 'launchctl unload ~/Library/LaunchAgents/openclaw.plist'
          : 'systemctl disable openclaw';
        break;
      case 'status':
        command = platform === 'darwin'
          ? 'launchctl list | grep openclaw'
          : 'systemctl status openclaw';
        break;
      case 'restart':
        command = platform === 'darwin'
          ? 'launchctl kickstart -k ~/Library/LaunchAgents/openclaw.plist'
          : 'systemctl restart openclaw';
        break;
      case 'logs':
        command = 'tail -n 100 ~/.openclaw/logs/gateway.log';
        break;
      default:
        throw new Error(`Unknown action: ${action}`);
    }

    const { stdout, stderr } = await exec(command);
    const serviceStatus = stderr ? 'error' : 'active';

    const duration = Date.now() - startTime;
    logger.info(`[daemon-manager] Completed successfully`, { duration });

    return {
      status: 'success',
      details: {
        result,
        duration_ms: duration,
        timestamp: new Date().toISOString()
      }
    };

  } catch (error) {
    logger.error(`[daemon-manager] Execution failed: ${error.message}`, { 
      error: error.message,
      stack: error.stack 
    });

    // Send alert for critical failures (Category 8)
    if (params.alert_on_failure) {
      await sendAlert(`[daemon-manager] Critical failure: ${error.message}`);
    }

    return {
      status: 'failure',
      details: {
        error: error.message,
        timestamp: new Date().toISOString()
      }
    };
  }
};
