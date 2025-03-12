import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../slices/carsSlice';
import { RootState } from '../store/store';
import { List, ListItem, ListItemText, Typography, TextField } from '@mui/material';

const CarList: React.FC = () => {
  const dispatch = useDispatch();
  const { cars, status } = useSelector((state: RootState) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (status === 'loading') {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Car List
      </Typography>
      <TextField
        label="Filter by Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <List>
        {cars.map((car) => (
          <ListItem key={car.id}>
            <ListItemText
              primary={car.name}
              secondary={`Price: $${car.price} | Mileage: ${car.mileage} miles`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CarList;