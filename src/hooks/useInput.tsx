import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { accountState, fromChainState, inputValueState } from "@/stores/state";
import { replaceDemical } from "@/utils";

export const useInput = () => {
  const account = useRecoilValue(accountState);
  const fromChain = useRecoilValue(fromChainState);
  const [inputValue, setInputValue] = useRecoilState<number>(inputValueState);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (account.length !== 0) {
      account[fromChain].balance < inputValue
        ? setIsError(true)
        : setIsError(false);
    }
  }, [account, inputValue, fromChain]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const _value = Number(e.target.value);
    if (_value < 0) return;
    setInputValue(replaceDemical(_value, 10));
  };

  const onReset = () => {
    setInputValue(0);
  };

  return {
    inputValue,
    isError,
    onChange,
    onReset,
  };
};
