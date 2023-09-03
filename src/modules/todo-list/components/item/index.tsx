import { ChangeEventHandler } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../state/atoms/todoListState';

interface Props {
  todoItem: {
    name: string;
    id: string;
    selected: boolean;
  };
}

export default ({ todoItem }: Props) => {
  const setTodoList = useSetRecoilState(todoListState);

  const onItemNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodoList((prev) =>
      prev.map((item) => {
        if (item.id !== todoItem.id) return item;
        return {
          ...item,
          name: e.target.value,
        };
      }),
    );
  };

  const onItemSelect: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodoList((prev) =>
      prev.map((item) => {
        if (item.id !== todoItem.id) return item;
        return {
          ...item,
          selected: e.target.checked,
        };
      }),
    );
  };

  const deleteTodoItem = () => {
    setTodoList((prev) => prev.filter((item) => item.id !== todoItem.id));
  };

  return (
    <li
      className={`flex items-center justify-between rounded-lg ${
        todoItem.selected ? 'bg-lime-500' : 'bg-yellow-500'
      } p-3`}
    >
      <input
        className={todoItem.selected ? 'bg-lime-400' : 'bg-yellow-400'}
        type="text"
        value={todoItem.name}
        onChange={onItemNameChange}
      />
      <input
        className={todoItem.selected ? 'bg-lime-400' : 'bg-yellow-400'}
        type="checkbox"
        checked={todoItem.selected}
        onChange={onItemSelect}
      />
      <button className="rounded-full bg-red-500 p-2 text-xs" onClick={deleteTodoItem}>
        Remove
      </button>
    </li>
  );
};
