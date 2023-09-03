import { ChangeEventHandler, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../state/atoms/todoListState';
import FilterPanel from '../filter-panel';

export default () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const addTodoItem = () => {
    setTodoList((prev) => [{ name: inputValue, id: inputValue + prev.length, selected: false }, ...prev]);
    setInputValue('');
  };

  return (
    <div className="flex flex-col">
      <div className="mb-3 flex gap-3">
        <input className="px-4" onChange={onChange} value={inputValue} type="text" />
        <button className="rounded-full bg-sky-600" disabled={!inputValue.length} onClick={addTodoItem}>
          Add item
        </button>
      </div>
      <FilterPanel />
    </div>
  );
};
