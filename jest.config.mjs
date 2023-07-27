import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
 
  testEnvironment: 'jest-environment-jsdom',
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)

// const nextJest = require('next/jest')
 
// // Providing the path to your Next.js app which will enable loading next.config.js and .env files
// const createJestConfig = nextJest({ dir: './' })
 
// // Any custom config you want to pass to Jest
// const customJestConfig = {
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
// }
 
// // createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
// module.exports = createJestConfig(customJestConfig)