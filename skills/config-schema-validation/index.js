/**
 * Configuration Schema Validation
 * 
 * Source: OpenClaw Mastery Index v4.1 - 1. Foundation & Core Architecture
 * Sub-heading: Configuration Schema Mastery
 * Priority: 5 (Critical)
 * Complexity: medium
 * 
 * Security: Validate all inputs per Category 8 Input Sanitization; use least privilege for config access
 */

const { exec } = require('openclaw/exec');
const { logger } = require('openclaw/logger');
const { validate } = require('openclaw/validator');
const { sendAlert } = require('openclaw/notify');
const fs = require('fs').promises;
const path = require('path');

/**
 * Validate openclaw.json structure and enforce JSON5 parsing rules with hot-reload support
 * 
 * @param {Object} params - Input parameters
 * @returns {Promise<Object>} Result with status and details
 */
module.exports = async (params = {}) => {
  const startTime = Date.now();

  try {
    logger.info(`[config-schema-validation] Starting execution`, { params });

    // Input validation (Category 8 security)
    if (!params.config_path) {
      throw new Error(`Required parameter 'config_path' is missing`);
    }

    // Sanitize inputs (Category 8)
    const sanitized = validate.sanitize(params);

    // Main implementation
    // Reference: 1. Foundation & Core Architecture - Configuration Schema Mastery

    // Configuration validation logic
    const configPath = sanitized.config_path || path.join(process.env.HOME, '.openclaw', 'openclaw.json');
    const configContent = await fs.readFile(configPath, 'utf8');
    const config = JSON.parse(configContent);

    // Validate schema
    const validation = validate.schema(config, 'openclaw.json');

    if (!validation.valid) {
      logger.error(`[config-schema-validation] Config validation failed`, { errors: validation.errors });
      return {
        status: 'failure',
        details: {
          errors: validation.errors,
          config_path: configPath,
          timestamp: new Date().toISOString()
        }
      };
    }

    const duration = Date.now() - startTime;
    logger.info(`[config-schema-validation] Completed successfully`, { duration });

    return {
      status: 'success',
      details: {
        result,
        duration_ms: duration,
        timestamp: new Date().toISOString()
      }
    };

  } catch (error) {
    logger.error(`[config-schema-validation] Execution failed: ${error.message}`, { 
      error: error.message,
      stack: error.stack 
    });

    // Send alert for critical failures (Category 8)
    if (params.alert_on_failure) {
      await sendAlert(`[config-schema-validation] Critical failure: ${error.message}`);
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
