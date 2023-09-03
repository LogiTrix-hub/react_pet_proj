import { useRecoilValue } from 'recoil';
import TodoItem from '../item';
import { filteredTodoList } from '../../state/selectors/filteredTodoList';

export default () => {
  const filteredTodoListValue = useRecoilValue(filteredTodoList);

  return (
    <ul className="flex flex-col gap-4">
      {filteredTodoListValue.map((item) => {
        return <TodoItem key={item.id} todoItem={item} />;
      })}
    </ul>
  );
};
