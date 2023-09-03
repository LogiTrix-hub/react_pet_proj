import { useRecoilValue } from 'recoil';
import { todoListInfo } from '../../state/selectors/todoListInfo';

export default () => {
  const todoInfo = useRecoilValue(todoListInfo);

  return (
    <ul className="flex flex-col items-start pt-2">
      <li>Active filter: {todoInfo.activeFilter}</li>
      <li>Completed percent: {todoInfo.percentCompleted.toFixed(1)}%</li>
      <li>Completed items: {todoInfo.selectedItems}</li>
      <li>Uncompleted items: {todoInfo.unselectedItems}</li>
      <li>Total items: {todoInfo.totalItems}</li>
    </ul>
  );
};
