import { atom } from "recoil";

export const TodoTitleFormState = atom<string>({
  key: "todoTitleForm",
  default: '',
});
