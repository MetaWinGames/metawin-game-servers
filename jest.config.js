module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: false,
    collectCoverageFrom: [
        "!*.json",
        "!db/migration/**/*",
        "!lib/**/*",
        "!test/**/*",
        "!coverage/**/*",
        "!.eslintrc.js",
        "!jest.config.js",
    ],
    testPathIgnorePatterns: ["/lib/"],
};
