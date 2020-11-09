module.exports = {
  "setupFilesAfterEnv": [
    "./jest.setup.js",
  ],
  "transformIgnorePatterns": ["node_modules/(?!(@storybook)/)"],
  "transform": {
    "^.+\\.[tj]sx?$": "babel-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx"
  },
}