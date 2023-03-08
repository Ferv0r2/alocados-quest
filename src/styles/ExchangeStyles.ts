import styled from "styled-components";
import { Gap, IconBox } from "@/styles/ComponentStyles";

const ExchangeContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding-top: 24px;
`;

const ChainContainer = styled.article`
  width: 100%;
  padding: 24px;
  grid-column: 1;
  background-color: #fafbfc;
  border-radius: 12px;
`;

const ChainIcon = styled(IconBox)`
  display: flex;
  align-items: center;
  border-radius: 30px;
  background-color: rgba(42, 50, 73, 0.05);
`;

const ChainLabel = styled.h2`
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 400;
  color: #4c5b7a;
  margin-left: 4px;
`;

const ChainAccount = styled.h3`
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
  color: #2a3249;
`;

const InfoTitle = styled.h2`
  font-family: "Poppins";
  font-size: 20px;
  font-weight: 600;
  color: #4c5b7a;
`;

const SwapContainer = styled.article`
  grid-column: span 2;
`;

const SwapCardContainer = styled(Gap)`
  grid-template-columns: repeat(4, 1fr);
  height: 56px;
`;

const SwapCounterLabel = styled.label`
  display: block;
  font-size: 12px;
  color: #545182;
`;

const SwapCounter = styled.input`
  font-size: 18px;
  font-weight: 600;
  color: #313c57;
  background-color: transparent;
  width: 100%;
  border: 0;

  &:focus {
    outline: none;
  }
`;

const SwapInputContainer = styled.div<{ label?: boolean }>`
  grid-column: span 3;
  display: flex;
  align-items: center;
  background-color: #fafbfc;
  background-color: ${({ label }) => (label ? "#fafbfc" : "transparent")};
  border-radius: 12px;
  padding: 10px 16px;
  line-height: 16px;
`;

const SwapAfterCount = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #313c57;
`;

const SwapChainButtonContainer = styled.div`
  grid-column: span 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fafbfc;
  border-radius: 12px;
  padding: 10px;
`;

const SwapButton = styled.button`
  display: flex;
  width: 100%;
  margin: 48px 0 36px 0;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  background-color: #5d28f2;
  border-radius: 12px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  line-height: 36px;
`;

export {
  ExchangeContainer,
  ChainContainer,
  ChainIcon,
  ChainLabel,
  ChainAccount,
  InfoTitle,
  SwapContainer,
  SwapCardContainer,
  SwapInputContainer,
  SwapCounterLabel,
  SwapCounter,
  SwapAfterCount,
  SwapChainButtonContainer,
  SwapButton,
};
