import { Outlet } from "react-router-dom";
import { PaddedContainer } from "./_shared/styles";

const Layout = () => {
  return (
    <PaddedContainer>
      <Outlet />
    </PaddedContainer>
  );
};

export default Layout;
