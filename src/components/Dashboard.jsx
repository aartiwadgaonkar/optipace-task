
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Footer from "./Footer";
import PieChartcompo from "./Piechart";
import CardLayout from "./CardLayout";

const Dashboard = () => {

  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const dates = ["19", "20", "21", "22", "23", "24", "25"];
  const selectedDateIndex = 3;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 3,
        flexGrow: 1,
        backgroundColor: "#EDF0F4"
      }}
    >
      <Box display="flex" justifyContent="space-between" marginBottom={3}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Overall Outstanding
          </Typography>
          <Paper
            elevation={3}
            sx={{
              marginTop: 1,
              padding: 2,
              fontWeight: "bold",
              color: "#1F2439",
            }}
          >
            ₹12,34,123
          </Paper>
        </Box>

        <Box>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ fontWeight: "bold", marginBottom: 1 }}
          >
            November 2024
          </Typography>
          <Grid container spacing={0.5} justifyContent="space-between">
            {days.map((day, index) => (
              <Grid item key={index}>
                <Typography
                  variant="body2"
                  align="center"
                  sx={{
                    color: "#000000",
                    fontWeight: selectedDateIndex === index ? "bold" : "normal",
                  }}
                >
                  {day}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={0.5} justifyContent="space-between" mt={1}>
            {dates.map((date, index) => (
              <Grid item key={index}>
                <Paper
                  elevation={selectedDateIndex === index ? 3 : 0}
                  sx={{
                    width: 30,
                    height: 30,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                    borderRadius: "50%",
                    bgcolor: selectedDateIndex === index ? "#1F2439" : "transparent",
                    color: selectedDateIndex === index ? "#FFFFFF" : "inherit",
                  }}
                >
                  <Typography variant="body2">
                    {date}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <CardLayout />
      <PieChartcompo />

      <Footer />

    </Box>
  );
};

export default Dashboard;
