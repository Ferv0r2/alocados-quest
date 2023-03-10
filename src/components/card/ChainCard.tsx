import { replaceBalance } from "@/utils";
import {
  ContainerInit,
  Icon,
  ChainIcon,
  ChainLabel,
  ChainAccount,
} from "@/styles";

interface Props {
  name: string;
  symbol: string;
  balance: number;
}

export const ChainCard = ({ name, symbol, balance }: Props) => {
  return (
    <div>
      <ContainerInit>
        <ChainIcon size={36}>
          <Icon
            src={`/assets/logos/${symbol.toLowerCase()}.png`}
            alt={symbol}
            size={20}
          />
        </ChainIcon>
        <ChainLabel>{name}</ChainLabel>
      </ContainerInit>
      <ChainAccount>
        {replaceBalance(balance)} {symbol}
      </ChainAccount>
    </div>
  );
};
