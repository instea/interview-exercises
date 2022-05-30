import { ReactNode } from 'react';

/**
 * NOTES:
 *  - you are free to remove the type and do it
 *    in javascript, but the signature must stay
 *    the same
 *  - you can modify the component to class component
 *    or any other variation if you so please
 *  - you can install any libraries if you want
 */

export type ConcurrentButtonProps = {
  operations: Array<() => Promise<any>>;
  onSuccess?: (results: any[]) => void;
  onError?: (e: Error) => void;
  maxConcurrency?: number;
  children?: ReactNode;
};

/**
 * This component runs all the operations on click
 *   - while the operations are running, the button
 *     should be disabled and display
 *     '{numberOfDone}/{numberOfAll}' after the label
 *   - when any operation fails, the button should
 *     display ' (ERROR)' after the label (children)
 *     and call `onError`
 *   - when all operations complete successfully,
 *     button should be in the initial state and
 *     call `onSuccess`
 *   - if `maxConcurrency` is provided, only that
 *     number of operations may run at the same time
 *   - BONUS: create a similar component, which will
 *     be a link ('<a/>') instead of button
 */
export function ConcurrentButton(props: ConcurrentButtonProps) {
  return <button>{props.children}</button>;
}
