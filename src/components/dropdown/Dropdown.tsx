import { MouseEventHandler } from "react";
import { chainItems } from "@/utils";
import {
  Backdrop,
  DropdownContainer,
  DropdownItem,
  Icon,
  IconBox,
  SwapChainButtonLabel,
} from "@/styles";

interface Props {
  onClose: MouseEventHandler<HTMLDivElement>;
  onSelected: (idx: number) => void;
}

export const Dropdown = ({ onClose, onSelected }: Props) => {
  return (
    <>
      <Backdrop onClick={onClose} />
      <DropdownContainer>
        {chainItems.map((v, i: number) => (
          <DropdownItem key={v.name} onClick={() => onSelected(i)}>
            <IconBox>
              <Icon
                src={`/assets/logos/${v.symbol.toLowerCase()}.png`}
                alt={v.symbol}
                size={16}
              />
              <SwapChainButtonLabel>{v.name}</SwapChainButtonLabel>
            </IconBox>
          </DropdownItem>
        ))}
      </DropdownContainer>
    </>
  );
};
