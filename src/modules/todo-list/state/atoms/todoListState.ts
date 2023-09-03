import { atom } from "recoil";

export const todoListState = atom({
  key: 'TodoList',
  default: [{
    name: 'Example',
    id: 'asdasd',
    selected: false
  }]
})