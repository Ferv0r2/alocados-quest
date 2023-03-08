import {
  Icon,
  IconBox,
  TransactionAccountLabel,
  TransactionColumn,
  TransactionDate,
  TransactionLogCotainer,
} from "@/styles";

export const TransactionLogCard = () => {
  return (
    <TransactionLogCotainer>
      <TransactionDate>2023-03-12, AM 10:50</TransactionDate>
      <TransactionColumn size={2}>
        <IconBox>
          <Icon size={24} src="assets/logos/eth.png" alt="arrow-right" />
        </IconBox>
        <TransactionAccountLabel>1,302.44 ETH</TransactionAccountLabel>
      </TransactionColumn>
      <TransactionColumn size={1}>
        <IconBox>
          <Icon
            size={16}
            src="assets/icons/arrow-right-circle.png"
            alt="arrow-right"
          />
        </IconBox>
      </TransactionColumn>
      <TransactionColumn size={2}>
        <IconBox>
          <Icon size={24} src="assets/logos/sol.png" alt="arrow-right" />
        </IconBox>
        <TransactionAccountLabel>1,302.44 SOL</TransactionAccountLabel>
      </TransactionColumn>
    </TransactionLogCotainer>
  );
};
