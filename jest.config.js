module.exports = {
  browser: true,
  collectCoverage: true,
  // setupFilesAfterEnv: [
  //   require.resolve("./build-utils/mocks/jest.setup.js"),
  //   "react-testing-library/cleanup-after-each",
  // ],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/build-utils/mocks/fileMock.js",
    "\\.(css|scss|less)$": "identity-obj-proxy"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  roots: ["src/"]
};
