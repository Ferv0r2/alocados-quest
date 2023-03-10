import { useLocation } from "react-router-dom";
import { navItems } from "@/utils";
import { HeaderLayout, HeaderLogo, HeaderNav, NavLink } from "@/styles";

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
            <NavLink to={v.path} active={location.pathname === v.path ? 1 : 0}>
              {v.name}
            </NavLink>
          </li>
        ))}
      </HeaderNav>
    </HeaderLayout>
  );
};
