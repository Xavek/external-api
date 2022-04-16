import pino from "pino";

/**
 * Pino logger new instance
 * TODO use this specification of logger instance during production
 */

// export const logger = pino({
//     level: process.env.NODE_ENV ==="production"? "info":"debug"
// })


/**
 * Normal pino instance mostly used during development
 */
export const logger = pino()