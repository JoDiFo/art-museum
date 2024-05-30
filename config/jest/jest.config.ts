import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  verbose: true,
  preset: "ts-jest",
  rootDir: "../../",
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/mocks/jestEmptyComponent.tsx",
  },
};

export default config;
