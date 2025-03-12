import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromWishlist } from '../slices/wishlistSlice';
import { List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Wishlist: React.FC = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state: RootState) => state.wishlist);

  const handleRemoveFromWishlist = (id: number) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Wishlist
      </Typography>
      <List>
        {wishlist.map((car) => (
          <ListItem key={car.id}>
            <ListItemText
              primary={car.name}
              secondary={`Price: $${car.price} | Mileage: ${car.mileage} miles`}
            />
            <IconButton onClick={() => handleRemoveFromWishlist(car.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Wishlist;