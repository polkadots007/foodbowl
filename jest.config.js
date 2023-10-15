/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  "collectCoverageFrom": [
    "!<rootDir>/src/App.tsx",
    "!<rootDir>/src/main.tsx",
    "!<rootDir>/src/fixtures/*.tsx",
    "!<rootDir>/src/hooks/*.tsx",
    "!<rootDir>/src/helpers/*.tsx",
    "!<rootDir>/src/services/mealdb.tsx"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    },
    "coverageReporters": [
      "html",
      "text"
    ]
  },
};