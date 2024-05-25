import React, { FC } from "react";
import CustomNavBar from "../Navbar";
import CustomFooter from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <CustomNavBar />
      <div>{children}</div>
      <CustomFooter />
    </div>
  );
};

export default Layout;
