type MonthlyReport = {
  month: string; // 'YYYY-MM'
  sum: number;
};

type ReportOutput = {
  [key: string /* YYYY-Q */]: {
    start: Date;
    end: Date;
    sum: number;
  }[];
};

function getQuarter(monthDescriptor: string) {
  const [, year, month] = monthDescriptor.match(/([0-9]{4})-([0-9]{2})/) || [];
  const date = new Date();
  date.setUTCFullYear(Number.parseInt(year, 10));
  date.setUTCDate(1);
  date.setUTCMonth(Number.parseInt(month, 10) - 1);
  date.setUTCHours(0);
  date.setUTCMinutes(0);
  date.setUTCSeconds(0);
  date.setUTCMilliseconds(0);
  switch (date.getUTCMonth()) {
    case 0:
    case 1:
    case 2:
      return `${date.getFullYear()}-1`;
    case 3:
    case 4:
    case 5:
      return `${date.getFullYear()}-2`;
    case 6:
    case 7:
    case 8:
      return `${date.getFullYear()}-3`;
    case 9:
    case 10:
    case 11:
      return `${date.getFullYear()}-4`;
  }
  return '';
}

function getMonthAsRange(monthDescriptor: string) {
  const [, year, month] = monthDescriptor.match(/([0-9]{4})-([0-9]{2})/) || [];
  const start = new Date();
  start.setUTCFullYear(Number.parseInt(year, 10));
  start.setUTCDate(1);
  start.setUTCMonth(Number.parseInt(month, 10) - 1);
  start.setUTCHours(0);
  start.setUTCMinutes(0);
  start.setUTCSeconds(0);
  start.setUTCMilliseconds(0);

  const end = new Date(start.getTime());
  end.setUTCMonth(end.getUTCMonth() + 1);
  end.setUTCMilliseconds(-1);

  return [start, end];
}

/**
 * Provide feedback for this function and try to refactor it
 * You can use native javascript features or a library of your choice
 */
export function computeQuartersReport(monthlyReports: MonthlyReport[]) {
  const output: ReportOutput = {};

  for (const monthlyReport of monthlyReports) {
    const quarter = getQuarter(monthlyReport.month);
    if (!output[quarter]) {
      output[quarter] = [];
    }

    const startAndEnd = getMonthAsRange(monthlyReport.month);
    output[quarter].push({
      start: startAndEnd[0],
      end: startAndEnd[1],
      sum: monthlyReport.sum,
    });
  }

  for (const key in output) {
    output[key].sort((a, b) => a.start.getTime() - b.start.getTime());
  }

  return output;
}
