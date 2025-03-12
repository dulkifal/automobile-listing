import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { updateProfile } from '../slices/userSlice';
import { TextField, Button, Typography, Box } from '@mui/material';

const UserProfile: React.FC = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state: RootState) => state.user);
  const [formData, setFormData] = useState({ name, email });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(updateProfile(formData));
    setIsEditing(false);
  };

  return (
    <Box sx={{ padding: 3 }}>
      
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" sx={{ marginRight: 2 }}>
            Save
          </Button>
          <Button
            variant="outlined"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </Button>
        </form>
      ) : (
        <Box>
          <Typography variant="body1">
            <strong>Name:</strong> {name}
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> {email}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsEditing(true)}
            sx={{ marginTop: 2 }}
          >
            Edit Profile
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default UserProfile;