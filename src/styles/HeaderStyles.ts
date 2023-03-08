import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderLayout = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  width: 100%;
  height: 120px;
`;

const HeaderLogo = styled.figure`
  position: relative;
  width: 168px;
  height: 40px;
`;

const HeaderNav = styled.nav`
  display: flex;
  gap: 24px;
`;

const NavLink = styled(Link)<{ active?: boolean }>`
  font-size: 15px;
  font-weight: 600;
  line-height: 36px;
  padding: 10px 16px;
  border-radius: 12px;
  background-color: ${({ active }) =>
    active ? "rgba(93, 40, 242, 0.12);" : "transparent"};
  color: ${({ active }) => (active ? "#5D28F2" : "#404E71")};
`;

export { HeaderLayout, HeaderLogo, HeaderNav, NavLink };
