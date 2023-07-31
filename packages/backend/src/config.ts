declare const process: {
  env: {
    MEGALINTER_ANALYSIS_URL: string;
    MEGALINTER_UPLOAD_URL: string;
    MEGALINTER_REDIS_URL: string;
    MEGALINTER_REDIS_CHANNEL: string;
    CODETOTAL_HTTP_PORT: number;
    CODETOTAL_HTTP_HOST: string;
    CODETOTAL_WS_PORT: number;
    CODETOTAL_WS_HOST: string;
    DEBUG_MODULES: string;
  };
};

const config = {
  MEGALINTER_ANALYSIS_URL: process.env.MEGALINTER_ANALYSIS_URL,
  MEGALINTER_UPLOAD_URL: process.env.MEGALINTER_UPLOAD_URL,
  MEGALINTER_REDIS_URL: process.env.MEGALINTER_REDIS_URL,
  MEGALINTER_REDIS_CHANNEL: process.env.MEGALINTER_REDIS_CHANNEL,
  CODETOTAL_HTTP_PORT: process.env.CODETOTAL_HTTP_PORT,
  CODETOTAL_HTTP_HOST: process.env.CODETOTAL_HTTP_HOST,
  CODETOTAL_WS_PORT: process.env.CODETOTAL_WS_PORT,
  CODETOTAL_WS_HOST: process.env.CODETOTAL_WS_HOST,
  DEBUG_MODULES: process.env.DEBUG_MODULES,
};

export default config;