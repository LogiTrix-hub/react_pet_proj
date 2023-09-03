import { atom } from "recoil";
import { TodoListFilterEnum } from "../../interface";

export const todoListFilterState = atom<TodoListFilterEnum>({
  key: 'todoListFilter',
  default: TodoListFilterEnum.SHOW_ALL
})