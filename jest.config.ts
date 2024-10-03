// file: jest.config.js
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], 
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // Adjust if your alias or directory structure is different
  },// <= setup file here 
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
