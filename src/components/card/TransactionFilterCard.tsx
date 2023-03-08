import {
  ContainerInit,
  IconBox,
  TransactionLogFilter,
  Typography,
} from "@/styles";
import { IconImage } from "../image/IconImage";

export const TransactionFilterCard = () => {
  return (
    <TransactionLogFilter>
      <ContainerInit>
        <Typography weight={700}>환전 시간</Typography>
        <IconBox>
          <IconImage src="assets/icons/arrow-down.png" name="order" size={16} />
        </IconBox>
      </ContainerInit>
      <div
        style={{
          gridColumn: "2/ span 2",
          display: "flex",
          alignItems: "center",
          marginLeft: "auto",
        }}
      >
        <Typography weight={400}>환전금액</Typography>
      </div>
    </TransactionLogFilter>
  );
};
