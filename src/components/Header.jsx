import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

// const SiteTitle = styled.h1`
//   font-size: 1.5rem;
//   color: #ccc;
// `;

// const NavMenu = styled.nav`
//   display: flex;
//   gap: 1.5rem;
// `;

// const NavItem = styled(Link)`
//   text-decoration: none;
//   font-size: 1rem;
//   color: #333;
//   font-weight: bold;

//   &:hover {
//     color: #4267b2;
//   }
// `;


const Header = () => {
    const Navigate=useNavigate();
  return (
    <HeaderContainer>
      {/* <SiteTitle>무료 성격진단 </SiteTitle>
      <NavMenu>
        <NavItem to="/">
          <HomeImage src="/14.gif" alt="홈" />
        </NavItem>
        <NavItem to="/timeline">
          <HomeImage src="/28.gif" alt="홈" />
        </NavItem>
        <NavItem to="/write">
          <HomeImage src="/7.gif" alt="홈" />
        </NavItem>
        <NavItem to="/">
          <HomeImage src="/21.png" alt="홈" />
        </NavItem>
      </NavMenu> */}
    </HeaderContainer>
  );
};

export default Header;
