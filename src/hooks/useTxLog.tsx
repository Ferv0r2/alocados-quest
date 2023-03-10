import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { IChain, ITransaction } from "@/utils";
import {
  accountState,
  fromChainState,
  toChainState,
  exchangeAmountState,
  inputValueState,
  txLogState,
} from "@/stores/state";

export const useTxLog = () => {
  const [txLog, setTxLog] = useRecoilState<ITransaction[]>(txLogState);
  const [isAsc, setIsAsc] = useState<boolean>(false);
  const account = useRecoilValue<IChain[]>(accountState);
  const inputValue = useRecoilValue<number>(inputValueState);
  const fromChain = useRecoilValue<number>(fromChainState);
  const toChain = useRecoilValue<number>(toChainState);
  const exchangeAmount = useRecoilValue<number>(exchangeAmountState);

  useEffect(() => {
    let newSorted;
    isAsc
      ? (newSorted = [...txLog].sort((a, b) => Number(a.date) - Number(b.date)))
      : (newSorted = [...txLog].sort(
          (a, b) => Number(b.date) - Number(a.date)
        ));
    setTxLog(newSorted);

    // eslint-disable-next-line
  }, [txLog.length, isAsc, setTxLog]);

  const onUpdateLog = () => {
    setTxLog([
      ...txLog,
      {
        from: account[fromChain].symbol,
        to: account[toChain].symbol,
        fromAmount: inputValue,
        toAmount: exchangeAmount,
        date: new Date(),
      },
    ]);
  };

  const onAsc = () => {
    setIsAsc(true);
  };

  const onDesc = () => {
    setIsAsc(false);
  };

  return { txLog, isAsc, onUpdateLog, onAsc, onDesc };
};
