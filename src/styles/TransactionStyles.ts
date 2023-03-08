import styled from "styled-components";
import { BaseLayout, ContainerInit } from "@/styles/ComponentStyles";

const TransactionLayout = styled(BaseLayout)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
`;

const TransactionContainer = styled.section`
  grid-column: 3 / span 8;
`;

const TransactionLogBase = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: #f4f5f8;
  border-radius: 12px;
  padding: 8px 16px;
  font-family: "Poppins";
`;

const TransactionLogFilter = styled(TransactionLogBase)`
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  color: #2a3249;
  font-size: 14px;
  line-height: 24px;
  margin: 24px 0 8px 0;
`;

const TransactionLogCotainer = styled(TransactionLogBase)`
  grid-template-columns: repeat(8, 1fr);
  gap: 16px;
`;

const TransactionDate = styled.div`
  grid-column: span 3;
  font-weight: 400;
  font-size: 14px;
`;

const TransactionColumn = styled(ContainerInit)<{ size: number }>`
  grid-column: ${({ size }) => `span ${size}` || "initial"};
  margin: 0 auto;
`;

const TransactionAccountLabel = styled.h3`
  display: block;
  font-size: 17px;
  font-weight: 600;
  margin-left: 8px;
  color: #404e71;
`;

export {
  TransactionLayout,
  TransactionContainer,
  TransactionLogFilter,
  TransactionLogCotainer,
  TransactionDate,
  TransactionColumn,
  TransactionAccountLabel,
};
