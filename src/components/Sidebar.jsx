import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ReactComponent as PersonIcon } from "../assets/images/Group 23091.svg";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "6rem",
        bgcolor: "white",
        display: { xs: "none", lg: "flex" }, // Hide on small screens, show on large
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        padding: 2,
        borderRight: "1px solid #ddd",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {[
        { icon: <PersonIcon />, label: "Dashboard" },
        { icon: <PersonIcon />, label: "Report" },
        { icon: <PersonIcon />, label: "Add Invoice" },
        { icon: <PersonIcon />, label: "Without PO" },
        { icon: <PersonIcon />, label: "Company" },
      ].map((item, index) => (
        <Box
          key={index}
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "fit-content",
            background: item.background || "transparent",
            borderRadius: "50%",
            padding: 1,
          }}
        >
          <IconButton
            color="inherit"
            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            {item.icon}
          </IconButton>
          <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
