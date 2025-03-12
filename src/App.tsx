import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Wishlist from './pages/Wishlist';
import UserProfile from './pages/UserProfile';
import { AppBar, Toolbar, Typography, Container, CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      {/* Add CssBaseline to reset default styles */}
      <CssBaseline />

      {/* Sticky App Bar */}
      <AppBar position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, width: '100vw' , paddingRight: 10 }}>
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

      {/* Main Content */}
      <Container sx={{ marginTop: 3, paddingBottom: 3 , height: '100vh' } }>
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