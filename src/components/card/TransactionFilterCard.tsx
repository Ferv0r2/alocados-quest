import { useTxLog } from "@/hooks/useTxLog";
import { IconImage } from "@/components/image/IconImage";
import {
  AnimateRotate,
  ContainerInit,
  TransactionLogFilter,
  TransactionLogFilterLabel,
  Typography,
} from "@/styles";

export const TransactionFilterCard = () => {
  const { isAsc, onAsc, onDesc } = useTxLog();

  const onChangeSort = () => {
    isAsc ? onDesc() : onAsc();
  };

  return (
    <TransactionLogFilter>
      <ContainerInit>
        <Typography weight={700}>환전 시간</Typography>
        <AnimateRotate active={isAsc ? 1 : 0} onClick={onChangeSort}>
          <IconImage
            src="/assets/icons/arrow-down.png"
            name="order"
            size={16}
          />
        </AnimateRotate>
      </ContainerInit>
      <TransactionLogFilterLabel>
        <Typography weight={400}>환전금액</Typography>
      </TransactionLogFilterLabel>
    </TransactionLogFilter>
  );
};
