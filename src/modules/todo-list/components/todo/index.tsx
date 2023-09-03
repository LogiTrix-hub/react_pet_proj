import TodoList from '../list';
import ControlPanel from '../control-panel';
import StatisticPanel from '../statistic-panel';
import { useRecoilValue } from 'recoil';
import { fakeApiSelector } from '../../state/selectors/fakeApiSelector';
import { ErrorBoundary } from 'react-error-boundary';

export default () => {
  const fakeAPiRes = useRecoilValue(fakeApiSelector);
  console.log(fakeAPiRes);

  return (
    <div>
      <ErrorBoundary fallback={<div>ERROR</div>}>
        <ControlPanel />
        <TodoList />
        <StatisticPanel />
      </ErrorBoundary>
    </div>
  );
};
