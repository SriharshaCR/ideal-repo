"use strict";

/**
 * Intended to perform all initializations
 */

import { default as AppLogger } from "./logger.js";

// INFO: Creating a Logger instance with windows Console object
const appLoggerObj = new AppLogger(console);
export const appLogger = appLoggerObj.loggerRef;
