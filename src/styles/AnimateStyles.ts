import styled from "styled-components";

const AnimateRotate = styled.div<{ active?: number }>`
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: ${({ active }) => (active ? "rotate(180deg)" : "rotate(0deg)")};
`;

const AnimateButton = styled.button`
  cursor: pointer;
  display: block;
  &:active {
    transition: transform 0.3s ease;
    transform: scale(0.9);
  }
`;

const AnimateButtonCenter = styled(AnimateButton)`
  margin: 0 auto;
`;

export { AnimateRotate, AnimateButton, AnimateButtonCenter };
