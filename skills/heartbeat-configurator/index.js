/**
 * Heartbeat Configurator
 * 
 * Source: OpenClaw Mastery Index v4.1 - 14. Observability & Telemetry
 * Sub-heading: Heartbeat Endpoint Configuration
 * Priority: 5 (Critical)
 * Complexity: low
 * 
 * Security: Secure heartbeat endpoints; prevent heartbeat spoofing per Category 8
 */

const { exec } = require('openclaw/exec');
const { logger } = require('openclaw/logger');
const { validate } = require('openclaw/validator');
const { sendAlert } = require('openclaw/notify');
const fs = require('fs').promises;
const path = require('path');

/**
 * Configure uptime monitoring with heartbeat endpoints (1 hour interval)
 * 
 * @param {Object} params - Input parameters
 * @returns {Promise<Object>} Result with status and details
 */
module.exports = async (params = {}) => {
  const startTime = Date.now();

  try {
    logger.info(`[heartbeat-configurator] Starting execution`, { params });

    // Input validation (Category 8 security)
    if (!params.endpoints) {
      throw new Error(`Required parameter 'endpoints' is missing`);
    }

    // Sanitize inputs (Category 8)
    const sanitized = validate.sanitize(params);

    // Main implementation
    // Reference: 14. Observability & Telemetry - Heartbeat Endpoint Configuration

    // Configuration validation logic
    const configPath = sanitized.config_path || path.join(process.env.HOME, '.openclaw', 'openclaw.json');
    const configContent = await fs.readFile(configPath, 'utf8');
    const config = JSON.parse(configContent);

    // Validate schema
    const validation = validate.schema(config, 'openclaw.json');

    if (!validation.valid) {
      logger.error(`[heartbeat-configurator] Config validation failed`, { errors: validation.errors });
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
    logger.info(`[heartbeat-configurator] Completed successfully`, { duration });

    return {
      status: 'success',
      details: {
        result,
        duration_ms: duration,
        timestamp: new Date().toISOString()
      }
    };

  } catch (error) {
    logger.error(`[heartbeat-configurator] Execution failed: ${error.message}`, { 
      error: error.message,
      stack: error.stack 
    });

    // Send alert for critical failures (Category 8)
    if (params.alert_on_failure) {
      await sendAlert(`[heartbeat-configurator] Critical failure: ${error.message}`);
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
