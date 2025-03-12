import React from 'react';
import { Box, Typography } from '@mui/material';
import WishList from '../components/WishList'; // Updated import with correct casing

const WishlistPage: React.FC = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Wishlist
      </Typography>
      <WishList /> {/* Update component usage to match */}
    </Box>
  );
};

export default WishlistPage;