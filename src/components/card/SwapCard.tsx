import { useAccount } from "@/hooks/useAccount";
import { useInput } from "@/hooks/useInput";
import { useExchange } from "@/hooks/useExchange";
import { SelectChainButton } from "@/components/button/SelectChainButton";
import {
  SwapCardContainer,
  SwapCounterLabel,
  SwapCounter,
  SwapInputContainer,
  SwapAfterCount,
} from "@/styles";

interface Props {
  label?: boolean;
  chainIdx: number;
}

export const SwapCard = ({ label, chainIdx }: Props) => {
  const { inputValue, isError, onChange } = useInput();
  const { account } = useAccount();
  const { exchangeAmount } = useExchange();

  return (
    <SwapCardContainer sizes="16px">
      <SwapInputContainer label={label ? 1 : 0} isError={isError ? 1 : 0}>
        {label ? (
          <div style={{ width: "100%" }}>
            <SwapCounterLabel>전환 수량</SwapCounterLabel>
            <SwapCounter type="number" value={inputValue} onChange={onChange} />
          </div>
        ) : (
          <SwapAfterCount>{exchangeAmount}</SwapAfterCount>
        )}
      </SwapInputContainer>
      <SelectChainButton
        label={label}
        name={account[chainIdx]?.name || ""}
        symbol={account[chainIdx]?.symbol || ""}
      />
    </SwapCardContainer>
  );
};
