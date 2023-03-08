import { ChainCard, SwapCard, TransactionLogCard } from "@/components/card";
import { useState } from "react";
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
} from "@/styles";

const chainItems: { name: string; symbol: string; amount: number }[] = [
  { name: "Solana", symbol: "SOL", amount: 1211023512.34 },
  { name: "Ethereum", symbol: "ETH", amount: 512.01 },
  { name: "BnB", symbol: "BNB", amount: 0.35 },
];

const ExchangePage = () => {
  const [currentChain, setCurrentChain] = useState<number>(0);

  return (
    <BaseLayout>
      <TitleLabel>환전하기</TitleLabel>
      <ExchangeContainer>
        <ChainContainer>
          <InfoTitle>요약</InfoTitle>
          <Separater />
          <Gap sizes="24px">
            {chainItems.map((v) => (
              <ChainCard name={v.name} symbol={v.symbol} amount={v.amount} />
            ))}
          </Gap>
        </ChainContainer>
        <SwapContainer>
          <SwapCard label name={"Solana"} symbol={"SOL"} amount={1} />
          <Padding sizes="24px">
            <IconImage src="assets/icons/swap.png" name="swap" size={40} />
          </Padding>
          <SwapCard name={"Ethereum"} symbol={"ETH"} amount={100} />
          <SwapButton onClick={() => {}}>환전</SwapButton>
          <TransactionLogCard />
        </SwapContainer>
      </ExchangeContainer>
    </BaseLayout>
  );
};

export default ExchangePage;
