import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromWishlist } from '../slices/wishlistSlice';
import { List, ListItem, ListItemText, Typography, IconButton, ListItemAvatar, Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Wishlist: React.FC = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state: RootState) => state.wishlist);

  const handleRemoveFromWishlist = (id: number) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div>
      
      {wishlist.length === 0 ? (
        <Typography>Your wishlist is empty.</Typography>
      ) : (
        <List>
          {wishlist.map((car) => (
            <ListItem key={car.id}>
              <ListItemAvatar>
              <Avatar src={car.image} alt={car.name} variant="rounded" />
            </ListItemAvatar>
              <ListItemText
                primary={car.name}
                secondary={`Price: $${car.price} | Mileage: ${car.mileage} miles`}
              />
              <IconButton
                onClick={() => handleRemoveFromWishlist(car.id)}
                aria-label="Remove from wishlist"
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Wishlist;