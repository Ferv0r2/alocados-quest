import { MouseEventHandler } from "react";
import { IconImage } from "@/components/image/IconImage";
import {
  AlertContainer,
  AlertLabel,
  AnimateButton,
  ContainerInit,
} from "@/styles";

interface Props {
  onClose: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}

export const ExchangeAlert = ({ onClose }: Props) => {
  return (
    <AlertContainer onClick={onClose}>
      <ContainerInit>
        <IconImage src="/assets/icons/info.png" name="info" size={20} />
        <AlertLabel>최근 거래 후 갱신되었습니다.</AlertLabel>
      </ContainerInit>

      <AnimateButton onClick={onClose}>
        <IconImage src="/assets/icons/close.png" name="close" size={24} />
      </AnimateButton>
    </AlertContainer>
  );
};
