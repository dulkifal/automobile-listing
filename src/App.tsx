import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Wishlist from './pages/Wishlist';
import UserProfile from './pages/UserProfile';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Automobile Listing
          </Typography>
          <Link to="/" style={{ color: 'white', marginRight: 16, textDecoration: 'none' }}>
            Dashboard
          </Link>
          <Link to="/wishlist" style={{ color: 'white', marginRight: 16, textDecoration: 'none' }}>
            Wishlist
          </Link>
          <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>
            Profile
          </Link>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 3 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;