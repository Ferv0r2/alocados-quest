import { atom } from "recoil";
import { v1 } from "uuid";
import { IChain, ITransaction, chainItems, txLogItems } from "@/utils";

const accountState = atom<IChain[]>({
  key: `accountState/${v1()}`,
  default: chainItems,
});

const fromChainState = atom<number>({
  key: `fromChainState/${v1()}`,
  default: 0,
});

const toChainState = atom<number>({
  key: `toChainState/${v1()}`,
  default: 1,
});

const inputValueState = atom<number>({
  key: `inputValueState/${v1()}`,
  default: 0,
});

const exchangeAmountState = atom<number>({
  key: `exchangeAmountState/${v1()}`,
  default: 0,
});

const txLogState = atom<ITransaction[]>({
  key: `txLogState/${v1()}`,
  default: txLogItems,
});

export {
  accountState,
  fromChainState,
  toChainState,
  inputValueState,
  exchangeAmountState,
  txLogState,
};
