import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CarList from '../components/CarList';
import FilterBar from '../components/FilterBar';

const Dashboard: React.FC = () => {
  const [filters, setFilters] = useState<{ price?: string; mileage?: string }>({});
console.log(filters);
  const handleFilterChange = (filter: { price?: string; mileage?: string }) => {
    setFilters(filter);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <FilterBar onFilterChange={handleFilterChange} />
      <CarList />
    </Box>
  );
};

export default Dashboard;