import styled from "styled-components";

const BaseLayout = styled.main`
  padding-top: 120px;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`;

const TitleLabel = styled.label`
  font-size: 22px;
  font-weight: 700;
`;

const IconBox = styled.figure<{ size?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => `${size}px` || "initial"};
  height: ${({ size }) => `${size}px` || "initial"};
`;

const Icon = styled.img<{ size: number }>`
  width: ${({ size }) => `${size}px` || "initial"};
  height: ${({ size }) => `${size}px` || "initial"};
`;

const ContainerInit = styled.div`
  display: flex;
  align-items: center;
`;

const Typography = styled.h3<{ weight: number }>`
  font-weight: ${({ weight }) => weight || "initial"};
`;

const Padding = styled.div<{ sizes: string }>`
  padding: ${({ sizes }) => sizes || "initial"};
`;

const Margin = styled.div<{ sizes: string }>`
  margin: ${({ sizes }) => sizes || "initial"};
`;

const Gap = styled.div<{ sizes: string }>`
  display: grid;
  gap: ${({ sizes }) => sizes || "initial"};
`;

const Separater = styled.hr`
  margin: 16px 0px;
`;

export {
  BaseLayout,
  TitleLabel,
  IconBox,
  Icon,
  ContainerInit,
  Typography,
  Padding,
  Margin,
  Gap,
  Separater,
};
