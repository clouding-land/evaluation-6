import React from "react";
import Sidebar from "@/components/Sidebar";
import Meta from "./Meta";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <>
      <Meta />
      <main>
      <Nav />
        <Sidebar />
        <div className="main-content">
          {children}
        </div>
      </main>
    </>
  );
}

export default Layout;
