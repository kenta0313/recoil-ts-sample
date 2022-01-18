import { atom } from "recoil";

export const searchTitleFormState = atom<string>({
  key: "todoTitleForm",
  default: '',
});
