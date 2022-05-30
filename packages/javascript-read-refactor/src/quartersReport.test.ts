import { mapValues } from 'lodash-es';

import { computeQuartersReport } from './quartersReport';

describe('computeQuartersReport', () => {
  it('should return the monthly reports groupped by quarter sorted by start date', () => {
    const actual = computeQuartersReport([
      { month: '2022-03', sum: 8 },
      { month: '2022-02', sum: 20 },
      { month: '2022-02', sum: 100 },
      { month: '2022-03', sum: 7 },
      { month: '2022-01', sum: -9 },
      { month: '2022-04', sum: 12 },
      { month: '2022-05', sum: 18 },
      { month: '2022-01', sum: 50 },
      { month: '2022-09', sum: 75 },
    ]);
    const serializedActual = mapValues(actual, arr =>
      arr.map(val => ({
        start: val.start.toISOString(),
        end: val.end.toISOString(),
        sum: val.sum,
      }))
    );

    expect(serializedActual).toEqual({
      '2022-1': [
        {
          end: '2022-01-31T23:59:59.999Z',
          start: '2022-01-01T00:00:00.000Z',
          sum: -9,
        },
        {
          end: '2022-01-31T23:59:59.999Z',
          start: '2022-01-01T00:00:00.000Z',
          sum: 50,
        },
        {
          end: '2022-02-28T23:59:59.999Z',
          start: '2022-02-01T00:00:00.000Z',
          sum: 20,
        },
        {
          end: '2022-02-28T23:59:59.999Z',
          start: '2022-02-01T00:00:00.000Z',
          sum: 100,
        },
        {
          end: '2022-03-31T23:59:59.999Z',
          start: '2022-03-01T00:00:00.000Z',
          sum: 8,
        },
        {
          end: '2022-03-31T23:59:59.999Z',
          start: '2022-03-01T00:00:00.000Z',
          sum: 7,
        },
      ],
      '2022-2': [
        {
          end: '2022-04-30T23:59:59.999Z',
          start: '2022-04-01T00:00:00.000Z',
          sum: 12,
        },
        {
          end: '2022-05-31T23:59:59.999Z',
          start: '2022-05-01T00:00:00.000Z',
          sum: 18,
        },
      ],
      '2022-3': [
        {
          end: '2022-09-30T23:59:59.999Z',
          start: '2022-09-01T00:00:00.000Z',
          sum: 75,
        },
      ],
    });
  });
});
