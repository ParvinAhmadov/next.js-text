import React from "react";
import Header from "./header";
import Footer from "./footer";
import 'remixicon/fonts/remixicon.css'
import { Provider } from "@/provide/SwrProvide";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider>
      <Header />
      <main>{children}</main>
      <Footer />
     </Provider>
    </>
  );
};

export default MainLayout;
