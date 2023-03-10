import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { rateBalance, replaceDemical } from "@/utils";
import {
  accountState,
  fromChainState,
  toChainState,
  exchangeAmountState,
  inputValueState,
} from "@/stores/state";

export const useExchange = () => {
  const account = useRecoilValue(accountState);
  const inputValue = useRecoilValue(inputValueState);
  const [fromChain, setFromChain] = useRecoilState(fromChainState);
  const [toChain, setToChain] = useRecoilState(toChainState);
  const [exchangeAmount, setExchangeAmount] =
    useRecoilState(exchangeAmountState);

  useEffect(() => {
    if (account.length !== 0) {
      setExchangeAmount(
        replaceDemical(
          rateBalance(
            account[fromChain].rate,
            account[toChain].rate,
            inputValue
          ),
          10
        )
      );
    }
  }, [account, inputValue, fromChain, toChain, setExchangeAmount]);

  const onSwap = () => {
    setFromChain(toChain);
    setToChain(fromChain);
  };

  return {
    fromChain,
    toChain,
    exchangeAmount,
    setFromChain,
    setToChain,
    onSwap,
  };
};
