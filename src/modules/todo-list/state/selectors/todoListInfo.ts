import { selector } from "recoil";
import { todoListFilterState } from "../atoms/todoListFilter";
import { todoListState } from "../atoms/todoListState";

export const todoListInfo = selector({
  key: 'TodoListInfo',
  get: ({get}) => {
    const list = get(todoListState);
    const activeFilter = get(todoListFilterState);

    const totalItems = list.length;
    const selectedItems = list.filter(i => i.selected).length;
    const unselectedItems = totalItems - selectedItems;
    const percentCompleted = totalItems === 0 ? 0 : selectedItems / totalItems * 100;

    return {
      totalItems,
      selectedItems,
      unselectedItems,
      percentCompleted,
      activeFilter
    }
  }
}) 