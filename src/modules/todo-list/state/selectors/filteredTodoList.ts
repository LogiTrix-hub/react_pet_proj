import { selector } from "recoil";
import { todoListState } from "../atoms/todoListState";
import { todoListFilterState } from "../atoms/todoListFilter";
import { TodoListFilterEnum } from "../../interface";

export const filteredTodoList = selector({
  key: 'FilteredTodoList',
  get: ({get}) => {
    const list = get(todoListState);
    const filter = get(todoListFilterState);

    switch(filter) {
      case TodoListFilterEnum.SHOW_SELECTED :
        return list.filter(i => i.selected)
      case TodoListFilterEnum.SHOW_UNSELECTED :
        return list.filter(i => !i.selected)
      default :
        return list
    }
  }
})