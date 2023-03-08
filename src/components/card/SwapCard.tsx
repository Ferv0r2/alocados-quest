import {
  SwapCardContainer,
  SwapCounterLabel,
  SwapCounter,
  SwapChainButtonContainer,
  SwapInputContainer,
  SwapAfterCount,
} from "@/styles";
import { SelectChainButton } from "../button/SelectChainButton";

interface Props {
  label?: boolean;
  name: string;
  symbol: string;
  amount: number;
}

export const SwapCard = ({ label, name, symbol, amount }: Props) => {
  return (
    <SwapCardContainer sizes="16px">
      <SwapInputContainer label={label}>
        {label ? (
          <div>
            <SwapCounterLabel>전환 수량</SwapCounterLabel>
            <SwapCounter type="number" value={1} onChange={() => {}} />
          </div>
        ) : (
          <SwapAfterCount>{amount}</SwapAfterCount>
        )}
      </SwapInputContainer>
      <SwapChainButtonContainer>
        <SelectChainButton name={name} symbol={symbol} />
      </SwapChainButtonContainer>
    </SwapCardContainer>
  );
};
