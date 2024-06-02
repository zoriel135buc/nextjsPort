import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  verbose: true,
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // Add moduleNameMapper to handle path aliases and CSS imports
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/app/components/$1",
    "^@content/(.*)$": "<rootDir>/app/components/content/$1",
    "^@functional/(.*)$": "<rootDir>/app/components/functional/$1",
    "^@ui/(.*)$": "<rootDir>/app/components/ui/$1",
    "^@css/(.*)$": "<rootDir>/app/css/$1",
    "^@cv/(.*)$": "<rootDir>/public/cv/$1",
    "^@logos/(.*)$": "<rootDir>/public/logos/$1",
    "^@personal/(.*)$": "<rootDir>/public/personal/$1",
    "^@university/(.*)$": "<rootDir>/public/university/$1",
    "\\.(css|less|scss)$": "identity-obj-proxy", // Handle CSS imports
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
