import { RecoilRoot } from 'recoil';
import { TodoListModule } from './modules/todo-list';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <h1>Hello world!</h1>
      <TodoListModule />
    </RecoilRoot>
  );
}

export default App;
