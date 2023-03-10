import { v1 } from "uuid";
import { useTxLog } from "@/hooks/useTxLog";
import { TransactionFilterCard, TransactionLogCard } from "@/components/card";
import {
  Gap,
  TitleLabel,
  TransactionContainer,
  TransactionLayout,
} from "@/styles";

const TransactionPage = () => {
  const { txLog } = useTxLog();

  return (
    <TransactionLayout>
      <TransactionContainer>
        <TitleLabel>환전 내역</TitleLabel>
        <TransactionFilterCard />
        <Gap sizes="8px">
          {txLog.map((v) => (
            <TransactionLogCard
              key={v1()}
              from={v.from}
              to={v.to}
              fromAmount={v.fromAmount}
              toAmount={v.toAmount}
              date={v.date}
            />
          ))}
        </Gap>
      </TransactionContainer>
    </TransactionLayout>
  );
};

export default TransactionPage;
