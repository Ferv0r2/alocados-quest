import { useLocation } from "react-router-dom";
import { HeaderLayout, HeaderLogo, HeaderNav, NavLink } from "@/styles";

const navItems: { name: string; path: string }[] = [
  { name: "환전하기", path: "/" },
  { name: "거래내역", path: "/transaction" },
];

export const Header = () => {
  const location = useLocation();

  return (
    <HeaderLayout>
      <HeaderLogo>
        <img src="/assets/logos/logo.png" alt="logo" />
      </HeaderLogo>

      <HeaderNav>
        {navItems.map((v) => (
          <li key={v.path}>
            <NavLink to={v.path} active={location.pathname === v.path}>
              {v.name}
            </NavLink>
          </li>
        ))}
      </HeaderNav>
    </HeaderLayout>
  );
};
