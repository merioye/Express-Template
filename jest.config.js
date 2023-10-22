module.exports = {
  // The test environment that will be used for testing
  testEnvironment: 'node',
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/node_modules/'],
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',
  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx'],
  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],
  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['./src/test-setup.js'],
  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  verbose: true,
};
