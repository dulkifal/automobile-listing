import React from 'react';
import { Box, Typography } from '@mui/material';
import CarList from '../components/CarList';

const Dashboard: React.FC = () => {

  return (
    <Box sx={{ padding: 3 }}>
     
      <CarList />
    </Box>
  );
};

export default Dashboard;