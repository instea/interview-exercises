import { modifyObject } from './modifyObject';

describe('modifyObject', () => {
  it('should rewrite employee job', () => {
    expect(
      modifyObject(
        {
          job: { type: 'employee', jobType: 'programmer' },
          name: 'John',
          surname: 'Smith',
          salary: 10000,
        },
        {
          job: { type: 'employee', jobType: 'tester' },
          salary: 8000,
        }
      )
    ).toEqual({
      job: { type: 'employee', jobType: 'tester' },
      name: 'John',
      surname: 'Smith',
      salary: 8000,
    });
  });
  it('should rewrite manager job', () => {
    expect(
      modifyObject(
        {
          job: { type: 'manager', department: 'HQ', managedEmployees: [] },
          name: 'John',
          surname: 'Smith',
          salary: 10000,
        },
        {
          job: { type: 'employee', jobType: 'tester' },
          salary: 8000,
        }
      )
    ).toEqual({
      job: { type: 'manager', department: 'HQ', managedEmployees: [] },
      name: 'John',
      surname: 'Smith',
      salary: 8000,
    });
  });
});
