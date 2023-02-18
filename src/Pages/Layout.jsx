import * as React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { Navbar } from "../components";
const Layout = () => {

  return (
    <>
        <Box sx={{bgcolor: "#000"}}>
          <Navbar />
          <main className="App">
            <Outlet />
          </main>
        </Box>
    </>
  );
};

export default Layout;
