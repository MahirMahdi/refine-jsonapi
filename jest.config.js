export default {
  preset: "ts-jest",
  rootDir: "./",
  displayName: "json-api",
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  testEnvironment: "jsdom",
};
