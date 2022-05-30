type ManagerJob = {
  type: 'manager';
  department: string;
  managedEmployees: Person[];
};
type EmployeeJob = {
  type: 'employee';
  jobType: 'programmer' | 'tester' | 'recruiter';
};

type Person = {
  name: string;
  surname: string;
  salary: number;
  job: ManagerJob | EmployeeJob;
};

/**
 * Provide feedback for this function and try to refactor it
 * You can use native javascript features or a library of your choice
 */
export function modifyObject(origPerson: Person, changes: Partial<Person>) {
  const p = origPerson as any;
  for (const changeKey in changes) {
    if (
      changeKey === 'job' &&
      p.job.type === 'employee' // only employee job change is supported
    ) {
      p.job.jobType = (changes.job as any).jobType;
    } else if (changeKey !== 'job') {
      p[changeKey] = (changes as any)[changeKey];
    }
  }

  return p;
}
