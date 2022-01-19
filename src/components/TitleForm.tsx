import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from "recoil"
import { TodoTitleFormState } from "../atoms/TodoTitleFormAtom"

const TitleForm = () => {
  const todoTitleFormValue: string = useRecoilValue(TodoTitleFormState);
  const setTodoTitleFormValue: SetterOrUpdater<string> = useSetRecoilState(
    TodoTitleFormState
  );
}