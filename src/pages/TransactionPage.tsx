import { TransactionFilterCard, TransactionLogCard } from "@/components/card";
import {
  Gap,
  TitleLabel,
  TransactionContainer,
  TransactionLayout,
} from "@/styles";

const TransactionPage = () => {
  return (
    <TransactionLayout>
      <TransactionContainer>
        <TitleLabel>환전 내역</TitleLabel>
        <TransactionFilterCard />
        <Gap sizes="8px">
          {[...Array(10)].map((v) => (
            <TransactionLogCard />
          ))}
        </Gap>
      </TransactionContainer>
    </TransactionLayout>
  );
};

export default TransactionPage;
