import { IconImage } from "@/components/image/IconImage";
import { formatDate, ITransaction, replaceDemical } from "@/utils";
import {
  TransactionAccountLabel,
  TransactionColumn,
  TransactionDate,
  TransactionLogCotainer,
} from "@/styles";

export const TransactionLogCard = ({
  from,
  to,
  fromAmount,
  toAmount,
  date,
}: ITransaction) => {
  return (
    <TransactionLogCotainer>
      <TransactionDate>{formatDate(date)}</TransactionDate>
      <TransactionColumn size={2}>
        <IconImage
          size={24}
          src={`/assets/logos/${from.toLowerCase()}.png`}
          name={from}
        />
        <TransactionAccountLabel>
          {replaceDemical(fromAmount, 2)} {from}
        </TransactionAccountLabel>
      </TransactionColumn>
      <TransactionColumn size={1}>
        <IconImage
          size={16}
          src="/assets/icons/arrow-right-circle.png"
          name="arrow-right"
        />
      </TransactionColumn>
      <TransactionColumn size={2}>
        <IconImage
          size={24}
          src={`/assets/logos/${to.toLowerCase()}.png`}
          name={to}
        />
        <TransactionAccountLabel>
          {replaceDemical(toAmount, 2)} {to}
        </TransactionAccountLabel>
      </TransactionColumn>
    </TransactionLogCotainer>
  );
};
