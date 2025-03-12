import React from 'react';
import { TextField } from '@mui/material';

interface FilterBarProps {
  onPriceChange: (price: number) => void;
  onMileageChange: (mileage: number) => void;
  onNameChange: (name: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onMileageChange, onPriceChange, onNameChange }) => {
  

  return (
    <div>
      
      <TextField
        label="Name"
        variant="outlined"
        type="text"
        onChange={(e) => onNameChange(String(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Max Price"
        variant="outlined"
        type="number"
        onChange={(e) => onPriceChange(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Max Mileage no"
        variant="outlined"
        type="number"
        onChange={(e) => onMileageChange(Number(e.target.value))}

        fullWidth
        margin="normal"
      />
   
    </div>
  );
};

export default FilterBar;