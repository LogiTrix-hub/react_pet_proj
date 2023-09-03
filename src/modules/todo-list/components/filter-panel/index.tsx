import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../state/atoms/todoListFilter';
import { TodoListFilterEnum } from '../../interface';
import { ChangeEventHandler } from 'react';

export default () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilter(e.target.value as TodoListFilterEnum);
  };

  return (
    <div className="mb-3 flex gap-2">
      <label className="flex gap-1">
        <input
          type="radio"
          onChange={onChange}
          value={TodoListFilterEnum.SHOW_ALL}
          checked={filter === TodoListFilterEnum.SHOW_ALL}
        />
        <p>{TodoListFilterEnum.SHOW_ALL}</p>
      </label>
      <label className="flex gap-1">
        <input
          type="radio"
          onChange={onChange}
          value={TodoListFilterEnum.SHOW_SELECTED}
          checked={filter === TodoListFilterEnum.SHOW_SELECTED}
        />
        <p>{TodoListFilterEnum.SHOW_SELECTED}</p>
      </label>
      <label className="flex gap-1">
        <input
          type="radio"
          onChange={onChange}
          value={TodoListFilterEnum.SHOW_UNSELECTED}
          checked={filter === TodoListFilterEnum.SHOW_UNSELECTED}
        />
        <p>{TodoListFilterEnum.SHOW_UNSELECTED}</p>
      </label>
    </div>
  );
};
