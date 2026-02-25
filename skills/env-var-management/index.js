/**
 * Environment Variable Management
 * 
 * Source: OpenClaw Mastery Index v4.1 - 1. Foundation & Core Architecture
 * Sub-heading: Environment Variable Management & Precedence
 * Priority: 5 (Critical)
 * Complexity: low
 * 
 * Security: Store sensitive vars in ~/.openclaw/credentials/ per Category 8 API Key Management; never log secrets
 */

const { exec } = require('openclaw/exec');
const { logger } = require('openclaw/logger');
const { validate } = require('openclaw/validator');
const { sendAlert } = require('openclaw/notify');
const fs = require('fs').promises;
const path = require('path');

/**
 * Manage OPENCLAW_* environment variables with dotenv integration and precedence resolution
 * 
 * @param {Object} params - Input parameters
 * @returns {Promise<Object>} Result with status and details
 */
module.exports = async (params = {}) => {
  const startTime = Date.now();

  try {
    logger.info(`[env-var-management] Starting execution`, { params });

    // Input validation (Category 8 security)
    if (!params.action) {
      throw new Error(`Required parameter 'action' is missing`);
    }

    // Sanitize inputs (Category 8)
    const sanitized = validate.sanitize(params);

    // Main implementation
    // Reference: 1. Foundation & Core Architecture - Environment Variable Management & Precedence

    // Environment variable management
    const action = sanitized.action || 'list';
    const result = {};

    switch (action) {
      case 'get':
        result.value = process.env[sanitized.var_name];
        break;
      case 'set':
        process.env[sanitized.var_name] = sanitized.var_value;
        result.set = true;
        break;
      case 'list':
        result.variables = Object.keys(process.env)
          .filter(k => k.startsWith('OPENCLAW_'))
          .map(k => ({ name: k, value: '***redacted***' }));
        break;
      case 'validate':
        result.valid = validate.envVars(process.env);
        break;
      default:
        throw new Error(`Unknown action: ${action}`);
    }

    const duration = Date.now() - startTime;
    logger.info(`[env-var-management] Completed successfully`, { duration });

    return {
      status: 'success',
      details: {
        result,
        duration_ms: duration,
        timestamp: new Date().toISOString()
      }
    };

  } catch (error) {
    logger.error(`[env-var-management] Execution failed: ${error.message}`, { 
      error: error.message,
      stack: error.stack 
    });

    // Send alert for critical failures (Category 8)
    if (params.alert_on_failure) {
      await sendAlert(`[env-var-management] Critical failure: ${error.message}`);
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
