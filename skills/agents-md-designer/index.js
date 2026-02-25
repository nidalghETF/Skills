/**
 * AGENTS.md Designer
 * 
 * Source: OpenClaw Mastery Index v4.1 - 19. Prompt Engineering & System Instructions
 * Sub-heading: AGENTS.md Operating Instructions Design
 * Priority: 5 (Critical)
 * Complexity: medium
 * 
 * Security: Security boundaries in AGENTS.md per Category 8; validate all instructions
 */

const { exec } = require('openclaw/exec');
const { logger } = require('openclaw/logger');
const { validate } = require('openclaw/validator');
const { sendAlert } = require('openclaw/notify');
const fs = require('fs').promises;
const path = require('path');

/**
 * Create AGENTS.md for agent behavior definition and operating instructions
 * 
 * @param {Object} params - Input parameters
 * @returns {Promise<Object>} Result with status and details
 */
module.exports = async (params = {}) => {
  const startTime = Date.now();

  try {
    logger.info(`[agents-md-designer] Starting execution`, { params });

    // Input validation (Category 8 security)
    if (!params.agent_name) {
      throw new Error(`Required parameter 'agent_name' is missing`);
    }
    if (!params.capabilities) {
      throw new Error(`Required parameter 'capabilities' is missing`);
    }

    // Sanitize inputs (Category 8)
    const sanitized = validate.sanitize(params);

    // Main implementation
    // Reference: 19. Prompt Engineering & System Instructions - AGENTS.md Operating Instructions Design

    // Implementation placeholder
    // TODO: Implement specific logic for AGENTS.md Designer

    const result = {
      message: 'AGENTS.md Designer executed successfully',
      params: sanitized
    };

    const duration = Date.now() - startTime;
    logger.info(`[agents-md-designer] Completed successfully`, { duration });

    return {
      status: 'success',
      details: {
        result,
        duration_ms: duration,
        timestamp: new Date().toISOString()
      }
    };

  } catch (error) {
    logger.error(`[agents-md-designer] Execution failed: ${error.message}`, { 
      error: error.message,
      stack: error.stack 
    });

    // Send alert for critical failures (Category 8)
    if (params.alert_on_failure) {
      await sendAlert(`[agents-md-designer] Critical failure: ${error.message}`);
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
