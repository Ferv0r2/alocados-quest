import { useRecoilState, useRecoilValue } from "recoil";
import { IChain } from "@/utils";
import {
  accountState,
  fromChainState,
  toChainState,
  exchangeAmountState,
  inputValueState,
} from "@/stores/state";

export const useAccount = () => {
  const [account, setAccount] = useRecoilState<IChain[]>(accountState);
  const inputValue = useRecoilValue<number>(inputValueState);
  const fromChain = useRecoilValue<number>(fromChainState);
  const toChain = useRecoilValue<number>(toChainState);
  const exchangeAmount = useRecoilValue<number>(exchangeAmountState);

  const onUpdateBalance = () => {
    const newAccount = JSON.parse(JSON.stringify(account));
    newAccount[fromChain].balance -= inputValue;
    newAccount[toChain].balance += exchangeAmount;
    setAccount(newAccount);
  };

  return {
    account,
    onUpdateBalance,
  };
};
