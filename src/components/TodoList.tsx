import { useRecoilValue } from "recoil"
import { searchedTodoListSelector } from "../selectors/SearchedTodoListSelector"
import Todo from "../types/Todo";

const TodoList = () => {
  const list: Todo[] = useRecoilValue(searchedTodoListSelector);
  return (
    <div>
      <p>タスク一覧test</p>
      <ul>
        {list.map((todo: Todo, i: number) => {
          <li key={i}>
            {todo.title}
          </li>
        })}
      </ul>
    </div>
  )
};

export default TodoList;