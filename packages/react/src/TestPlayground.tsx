import { random, range } from 'lodash-es';
import { useState } from 'react';

import { ConcurrentButton, ConcurrentButtonProps } from './concurrentElements';

const makeSuccessFunction = () => () =>
  new Promise(resolve => {
    console.log('Start');
    setTimeout(() => resolve(random(0, 100)), random(0, 6000));
    console.log('End');
  });
const makeErrorFunction = () => () =>
  new Promise((_, reject) => {
    console.log('Start');
    setTimeout(() => reject(new Error('Failed')), random(0, 6000));
    console.log('End');
  });

const OPERATIONS_SUCCESS: ConcurrentButtonProps['operations'] = range(0, 3).map(
  makeSuccessFunction
);
const OPERATIONS_ERROR: ConcurrentButtonProps['operations'] = [
  ...range(0, 3).map(makeSuccessFunction),
  makeErrorFunction(),
];
const OPERATIONS_MANY: ConcurrentButtonProps['operations'] = range(0, 12).map(
  makeSuccessFunction
);

export default function TestPlayground() {
  const [key, setKey] = useState(0);

  return (
    <div className="Container--Padded Column">
      <div>
        <button onClick={() => setKey(k => k + 1)}>Reset</button>
      </div>
      <div className="Row">
        <ConcurrentButton
          key={key}
          operations={OPERATIONS_SUCCESS}
          onSuccess={results => console.log('Success: ', results)}
        >
          Run successfully
        </ConcurrentButton>
        <ConcurrentButton
          key={key}
          operations={OPERATIONS_ERROR}
          onError={e => console.error(e)}
        >
          Run with error
        </ConcurrentButton>
        <ConcurrentButton
          key={key}
          operations={OPERATIONS_MANY}
          maxConcurrency={4}
        >
          Run many
        </ConcurrentButton>
      </div>
    </div>
  );
}
