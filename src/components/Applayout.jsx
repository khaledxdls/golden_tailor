import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  position: relative;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  /* padding: 4rem 4.8rem 6.4rem; */
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <NavBar />
        <Main>
          <Container>
            <Outlet />
          </Container>{" "}
        </Main>{" "}
        <Footer />
      </StyledAppLayout>{" "}
    </>
  );
}

export default AppLayout;
