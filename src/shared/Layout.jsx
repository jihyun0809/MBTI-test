import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`; 

const Layout = () => {
  return (
    // <PageContainer>
    <>
    <header>헤더
      <br/>
      <Link to ="/">홈</Link>
      <Link to ="/profile">프로필</Link>
      <Link to ="/test">테스트</Link>
      <Link to ="results">테스트결과</Link>
    </header>
      <Outlet />
      <footer>푸터</footer>
     
    </>
  //  </PageContainer>
  );
};

export default Layout;
