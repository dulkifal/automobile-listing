import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../slices/carsSlice';
import { RootState } from '../store/store';
import { List, ListItem, ListItemText, Typography, TextField, IconButton, ListItemAvatar, Avatar } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addToWishlist } from '../slices/wishlistSlice';

const CarList: React.FC = () => {
  const dispatch = useDispatch();
  const { cars, status } = useSelector((state: RootState) => state.cars);
  const [filteredCars, setFilteredCars] = useState<CarDTO[]>([]);
  const [filters, setFilters] = useState<{ price?: number; mileage?: number ; name?: string }>({});

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    let filtered = cars;

    if (filters.price) {
      filtered = filtered.filter((car) => car.price <= filters.price!);
    }

    if (filters.mileage) {
      filtered = filtered.filter((car) => car.mileage <= filters.mileage!);
    }
    if (filters.name) {
      filtered = filtered.filter((car) => car.name.toLowerCase().includes(filters.name!.toLowerCase()));
    }

    setFilteredCars(filtered);
  }, [cars, filters]);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, price: Number(event.target.value) });
  };

  const handleMileageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, mileage: Number(event.target.value) });
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, name: String(event.target.value) });
  };

  const handleAddToWishlist = (car: CarDTO) => {
    dispatch(addToWishlist(car));
  };

  if (status === 'loading') {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Car List
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        type="text"
        onChange={handleNameChange}
        fullWidth
        margin="normal"
      />
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
      <List>
        {filteredCars.map((car) => (
          <ListItem key={car.id}>
            <ListItemAvatar>
              <Avatar src={car.image} alt={car.name} variant="rounded" />
            </ListItemAvatar>
            <ListItemText
              primary={car.name}
              secondary={`Price: $${car.price} | Mileage: ${car.mileage} miles`}
            />
            <IconButton
              onClick={() => handleAddToWishlist(car)}
              aria-label="Add to wishlist"
            >
              <FavoriteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CarList;