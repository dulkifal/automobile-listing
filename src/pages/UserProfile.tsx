import React from 'react';
import { Box, Typography } from '@mui/material';
import UserProfile from '../components/UserProfile';

const UserProfilePage: React.FC = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <UserProfile />
    </Box>
  );
};

export default UserProfilePage;