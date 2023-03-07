import styled from "styled-components";

const ExchangeLayout = styled.main`
  padding-top: 120px;
  max-width: 960px;
  width: 100%;
  margin: auto;
`;

const TitleLabel = styled.label`
  font-size: 22px;
  font-weight: 700;
`;

const ExchangeContainer = styled.section`
  display: flex;
  padding-top: 24px;
  gap: 16px;
`;

const ChainContainer = styled.article`
  padding: 24px;
`;

const Separater = styled.hr`
  margin: 0px 8px;
`;

const SwapContainer = styled.article`
  padding: 24px;
`;

export {
  ExchangeLayout,
  TitleLabel,
  ExchangeContainer,
  ChainContainer,
  Separater,
  SwapContainer,
};
