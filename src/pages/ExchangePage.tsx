import {
  ExchangeLayout,
  TitleLabel,
  ExchangeContainer,
  Separater,
  ChainContainer,
  SwapContainer,
} from "@/styles";

const ExchangePage = () => {
  return (
    <ExchangeLayout>
      <TitleLabel>환전하기</TitleLabel>
      <ExchangeContainer>
        <ChainContainer>
          <Separater />
        </ChainContainer>
        <SwapContainer></SwapContainer>
      </ExchangeContainer>
    </ExchangeLayout>
  );
};

export default ExchangePage;
