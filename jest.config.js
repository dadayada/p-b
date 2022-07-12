// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const coverageIgnore = require('./config/jest/jest.coverage.ignore').map(mask => `!${mask}`);

module.exports = {
    preset: 'ts-jest',

    clearMocks: true,

    collectCoverageFrom: ['<rootDir>/src/**/*.[tj]s?(x)', ...coverageIgnore],

    // The directory where Jest should output its coverage files
    coverageDirectory: 'tmp/coverage',

    coveragePathIgnorePatterns: ['node_modules'],

    coverageReporters: ['html', 'text'],

    reporters: ['default', 'jest-summarizing-reporter'],

    globals: {},

    moduleFileExtensions: [
        'web.js',
        'js',
        'web.ts',
        'ts',
        'web.tsx',
        'tsx',
        'json',
        'web.jsx',
        'jsx',
        'node',
    ],

    moduleNameMapper: {
        '^react-native$': 'react-native-web',
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        '^i18next-resource-store-loader.+$': '<rootDir>/src/shared-components/edit-by-csv/locales',
    },

    resolver: 'jest-pnp-resolver',

    setupFiles: ['react-app-polyfill/jsdom'],

    setupFilesAfterEnv: ['<rootDir>/config/jest/jestSetup.js'],

    testEnvironment: 'jsdom',

    testMatch: ['**/?(*.)+(test).[tj]s?(x)'],

    testPathIgnorePatterns: ['/node_modules/', '/shared/', '/scripts/'],

    coverageThreshold: {
        global: {
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90,
        },
        // For each file
        'src/**/**/*.{ts,tsx,js,jsx}': {
            statements: 80,
            branches: 80,
            functions: 80,
            lines: 80,
        },
    },

    testURL: 'http://localhost',

    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
        '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
    },

    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
        '^.+\\.module\\.(css|sass|scss)$',
    ],

    verbose: true,

    snapshotSerializers: ['jest-serializer-html'],
};
