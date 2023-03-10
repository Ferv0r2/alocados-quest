import { useEffect, useState } from "react";
import { v1 } from "uuid";
import { useTxLog } from "@/hooks/useTxLog";
import { useExchange } from "@/hooks/useExchange";
import { useInput } from "@/hooks/useInput";
import { useAccount } from "@/hooks/useAccount";
import { ExchangeAlert } from "@/components/alert/ExchangeAlert";
import { ChainCard, SwapCard, TransactionLogCard } from "@/components/card";
import { IconImage } from "@/components/image/IconImage";
import {
  BaseLayout,
  TitleLabel,
  ExchangeContainer,
  Separater,
  ChainContainer,
  SwapContainer,
  SwapButton,
  InfoTitle,
  Gap,
  Padding,
  AnimateButtonCenter,
} from "@/styles";

const ExchangePage = () => {
  const { account, onUpdateBalance } = useAccount();
  const { txLog, onUpdateLog } = useTxLog();
  const { inputValue, isError, onReset } = useInput();
  const { fromChain, toChain, onSwap } = useExchange();
  const [isAlert, setIsAlert] = useState<boolean>(false);

  const onExchange = () => {
    onUpdateLog();
    onUpdateBalance();
    onReset();
  };

  const onCloseAlert = () => {
    setIsAlert(false);
  };

  useEffect(() => {
    if (txLog.length > 2) {
      setIsAlert(true);
    }
  }, [txLog.length]);

  return (
    <BaseLayout>
      <TitleLabel>환전하기</TitleLabel>
      <Padding sizes="24px 0 0 0">
        {isAlert && <ExchangeAlert onClose={onCloseAlert} />}
        <ExchangeContainer>
          <ChainContainer>
            <InfoTitle>요약</InfoTitle>
            <Separater />
            <Gap sizes="24px">
              {account.map((v) => (
                <ChainCard
                  key={v1()}
                  name={v.name}
                  symbol={v.symbol}
                  balance={v.balance}
                />
              ))}
            </Gap>
          </ChainContainer>
          <SwapContainer>
            <SwapCard label={true} chainIdx={fromChain} />
            <Padding sizes="24px">
              <AnimateButtonCenter type="button" onClick={onSwap}>
                <IconImage src="/assets/icons/swap.png" name="swap" size={40} />
              </AnimateButtonCenter>
            </Padding>
            <SwapCard chainIdx={toChain} />
            <SwapButton
              disabled={isError || inputValue <= 0}
              type="button"
              onClick={onExchange}
            >
              환전
            </SwapButton>
            <TransactionLogCard
              from={txLog[0]?.from || ""}
              to={txLog[0]?.to || ""}
              fromAmount={txLog[0]?.fromAmount || 0}
              toAmount={txLog[0]?.toAmount || 0}
              date={txLog[0]?.date || new Date()}
            />
          </SwapContainer>
        </ExchangeContainer>
      </Padding>
    </BaseLayout>
  );
};

export default ExchangePage;
