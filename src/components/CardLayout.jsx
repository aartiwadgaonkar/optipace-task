

import React from "react";
import { Box, Grid, Card, CardContent, Typography, IconButton } from "@mui/material";
import { ReactComponent as PersonIcon } from "../assets/images/Group 23095.svg";


const CardLayout = () => {
    const cardData = [
        { image: <PersonIcon sx={{ fontSize: 20 }} />, title: "Invoice", total: "Total", rs: "₹10,000" },
        { image: <PersonIcon sx={{ fontSize: 20 }} />, title: "Payble Amount", total: "5000", rs: "₹20,000" },
        { image: <PersonIcon sx={{ fontSize: 20 }} />, title: "Overdue", total: "5000", rs: "₹30,000" },
        { image: <PersonIcon sx={{ fontSize: 20 }} />, title: "Payble Amount", total: "5000", rs: "₹40,000" },
        { image: <PersonIcon sx={{ fontSize: 20 }} />, title: "Rejected", total: "5000", rs: "₹40,000" },
        { image: <PersonIcon sx={{ fontSize: 20 }} />, title: "Dispue ", total: "5000", rs: "₹40,000" },
        { image: <PersonIcon sx={{ fontSize: 20 }} />, title: "Department", total: "5000", rs: "₹40,000" },
        { image: <PersonIcon sx={{ fontSize: 20 }} />, title: "vendors", total: "5000", rs: "₹40,000" },
    ];

    return (
        <Box sx={{ padding: 3 }}>
            <Grid container spacing={2}>
                {cardData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card>
                            <CardContent>
                                <Box display="flex" alignItems="center" mb={2} >
                                    <IconButton color="primary" sx={{ marginRight: 2, marginTop: -6 }} >
                                        {item.image}
                                    </IconButton>

                                    <Box>
                                        <Typography variant="h6">{item.title}</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Total:  {item.total}
                                        </Typography>
                                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                            Rs: {item.rs}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CardLayout;
