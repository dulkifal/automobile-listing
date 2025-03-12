import React from 'react';
import { TextField, RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface FilterBarProps {
  onFilterChange: (filter: { price?: string; mileage?: string }) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ price: event.target.value });
  };

  const handleMileageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ mileage: event.target.value });
  };

  return (
    <div>
      <TextField
        label="Max Price"
        variant="outlined"
        type="number"
        onChange={handlePriceChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Max Mileage"
        variant="outlined"
        type="number"
        onChange={handleMileageChange}
        fullWidth
        margin="normal"
      />
      <RadioGroup row aria-label="price-range" name="price-range">
        <FormControlLabel value="low" control={<Radio />} label="Low" />
        <FormControlLabel value="medium" control={<Radio />} label="Medium" />
        <FormControlLabel value="high" control={<Radio />} label="High" />
      </RadioGroup>
    </div>
  );
};

export default FilterBar;