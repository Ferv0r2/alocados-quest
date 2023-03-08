import { atom } from "recoil";
import { v1 } from "uuid";

export const accountState = atom<any[]>({
  key: `accountState/${v1()}`,
  default: [],
});
