import {
  ContainerInit,
  Icon,
  ChainIcon,
  ChainLabel,
  ChainAccount,
} from "@/styles";
import { replaceAccount } from "@/utils";

interface Props {
  name: string;
  symbol: string;
  amount: number;
}

export const ChainCard = ({ name, symbol, amount }: Props) => {
  return (
    <div>
      <ContainerInit>
        <ChainIcon size={36}>
          <Icon
            src={`assets/logos/${symbol.toLowerCase()}.png`}
            alt={symbol}
            size={20}
          />
        </ChainIcon>
        <ChainLabel>{name}</ChainLabel>
      </ContainerInit>
      <ChainAccount>
        {replaceAccount(amount)} {symbol}
      </ChainAccount>
    </div>
  );
};
