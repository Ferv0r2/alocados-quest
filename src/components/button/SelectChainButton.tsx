import { useState } from "react";
import { useExchange } from "@/hooks/useExchange";
import { Dropdown } from "@/components/dropdown/Dropdown";
import { IconImage } from "@/components/image/IconImage";
import {
  ContainerInit,
  SwapChainButtonContainer,
  SwapChainButtonLabel,
  AnimateRotate,
} from "@/styles";

interface Props {
  label?: boolean;
  name: string;
  symbol: string;
}

export const SelectChainButton = ({ label, name, symbol }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setFromChain, setToChain } = useExchange();

  const onChangeDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onSelected = (idx: number) => {
    label ? setFromChain(idx) : setToChain(idx);
    setIsOpen(false);
  };

  return (
    <SwapChainButtonContainer onClick={onChangeDropdown}>
      {isOpen && (
        <Dropdown onClose={onChangeDropdown} onSelected={onSelected} />
      )}
      <ContainerInit>
        <IconImage
          src={`/assets/logos/${symbol.toLowerCase()}.png`}
          name={symbol}
          size={18}
          boxSize={24}
        />
        <SwapChainButtonLabel>{name}</SwapChainButtonLabel>
      </ContainerInit>

      <AnimateRotate active={isOpen ? 1 : 0}>
        <IconImage
          src="/assets/icons/dropdown.png"
          name="dropdown"
          size={18}
          boxSize={24}
        />
      </AnimateRotate>
    </SwapChainButtonContainer>
  );
};
