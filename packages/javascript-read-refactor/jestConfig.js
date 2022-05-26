/* eslint-disable import/no-unused-modules */
module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tscnfig: 'tsconfig.json',
    },
  },
  setupFilesAfterEnv: ['@alex_neo/jest-expect-message'], // FIXME: https://github.com/mattphillips/jest-expect-message/pull/40
  moduleNameMapper: {
    '^lodash-es$': 'lodash', // https://stackoverflow.com/a/54117206/741871
  },
};
