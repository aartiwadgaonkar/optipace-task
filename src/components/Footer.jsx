

import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Paper } from '@mui/material';

const Footer = () => {

  const footerData = [
    { days: "5 Days", rupees: 50055 },
    { days: "4 Days", rupees: 4004 },
    { days: "6 Days", rupees: 600 },
    { days: "7 Days", rupees: 703330 },
    { days: "3 Days", rupees: 30033 },
    { days: "2 Days", rupees: 2003 },
  ];
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ backgroundColor: "#D5E3FF", padding: 3, overflow: "hidden" }}
    >
      <Box display="flex" justifyContent="space-between" width="100%" marginBottom={2}>
        <Box>
          <Typography variant="h6">Due by Age Summary</Typography>
          <Typography variant="body2">Payment due day wise</Typography>
        </Box>
        <Typography variant="body2" color="textSecondary" style={{ textAlign: "right" }}>
          Penalty Saved Amount
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
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {footerData.map((item, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <Card>
              <CardContent>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography variant="body1">{item.days}</Typography>
                  <Typography
                    variant="h6"
                    sx={{ marginTop: 1, fontWeight: "bold" }}
                  >
                    ₹{item.rupees}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

  );
};

export default Footer;
