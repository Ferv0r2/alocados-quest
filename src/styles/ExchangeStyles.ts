import styled from "styled-components";
import { ContainerInit, Gap, IconBox } from "@/styles/ComponentStyles";

const AlertContainer = styled(ContainerInit)`
  background-color: rgba(55, 86, 228, 0.12);
  border-radius: 12px;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 14px;
`;

const AlertLabel = styled.span`
  color: #3756e4;
  font-size: 15px;
  line-height: 22px;
  margin-left: 8px;
`;

const ExchangeContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
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
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const SwapInputContainer = styled(ContainerInit)<{
  label?: 1 | 0;
  isError?: 1 | 0;
}>`
  grid-column: span 3;
  background-color: ${({ label }) => (label ? "#fafbfc" : "transparent")};
  border: ${({ label, isError }) =>
    label && isError ? "1px solid #F7254B" : "none"};
  border-radius: 12px;
  padding: 10px 16px;
  line-height: 16px;
`;

const SwapAfterCount = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #313c57;
`;

const SwapChainButtonContainer = styled(ContainerInit)`
  position: relative;
  justify-content: space-between;
  align-items: center;
  grid-column: span 1;
  background-color: #fafbfc;
  border-radius: 12px;
  padding: 10px;
`;

const SwapChainButtonLabel = styled.span`
  font-size: 14px;
  font-family: "Poppins";
  font-weight: 400;
  color: #4c5b7a;
  margin-left: 4px;
`;

const DropdownContainer = styled.div`
  position: absolute;
  border: 1px solid #afafaf;
  width: 100%;
  top: calc(100% + 4px);
  left: 0;
  border-radius: 12px;
  background-color: #fafbfc;
  z-index: 20;
  overflow: hidden;
`;

const DropdownItem = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 10px 16px;

  & + * {
    border-top: 1px solid #e5e7eb;
  }

  &:hover {
    background-color: #e5e7eb;
  }
`;

const SwapButton = styled.button`
  cursor: pointer;
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

  &:disabled {
    cursor: not-allowed;
    background-color: #e0e2e8;
    color: #a9b0c1;
  }
`;

export {
  AlertContainer,
  AlertLabel,
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
  SwapChainButtonLabel,
  DropdownContainer,
  DropdownItem,
  SwapButton,
};
