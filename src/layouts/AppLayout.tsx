import Navbar from "@web/components/layout/Navbar";
import React, { FC } from "react";

export type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div>
      {/* <Navbar /> */}
      {children}
    </div>
  );
};

export default AppLayout;
