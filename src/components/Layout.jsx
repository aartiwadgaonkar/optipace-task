
import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";


const Layout = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100%", flexDirection: "row" }}>
    
      <Sidebar />

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          padding: 3,
          overflow: "auto", 
        }}
      >
        <Dashboard />
      </Box>
    </Box>
  );
};

export default Layout;
