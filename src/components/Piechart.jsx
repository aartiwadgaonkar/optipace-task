
import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PieChartcompo = () => {


  const COLORS = ['#EE7777', '#EA5455', '#F5B461', '#1F2439','#4BAAB4','#F5B462'];  
  const pieChartData = [
    { name: "Pocessing Queue", value: 400 },
    { name: "Pocessing Queue", value: 300 },
    { name: "Pocessing Queue", value: 300 },
    { name: "Pocessing Queue", value: 200 },
    { name: "Pocessing Queue", value: 200 },
    { name: "Pocessing Queue", value: 200 },
  ];


  return (
    <Grid container spacing={2} marginBottom={3}>
    {["Queue 1", "Queue 2"].map((queue, index) => (
      <Grid item xs={12} sm={6} key={index}>
        <Card>
          <CardContent>
            <Typography variant="h6" align="left" gutterBottom>
              {queue}
            </Typography>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  label={(props) => {
                    const { cx, cy, midAngle, innerRadius, outerRadius, value, index } =
                      props;
                    const RADIAN = Math.PI / 180;
                    const x = cx + (outerRadius + 10) * Math.cos(-midAngle * RADIAN);
                    const y = cy + (outerRadius + 10) * Math.sin(-midAngle * RADIAN);
                    return (
                      <text
                        x={x}
                        y={y}
                        fill="#333"
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        {pieChartData[index].value}
                      </text>
                    );
                  }}
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="middle" layout="vertical" align="right" />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
  );
};

export default PieChartcompo;
