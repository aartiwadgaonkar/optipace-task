import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';

const Navbar = () => {
  return (
    <AppBar position="sticky" style={{ backgroundColor: '#FFFFFF', color: 'black' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon /> LOGO
        </IconButton>

        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
            <InputBase
              sx={{
                borderRadius: '4px',
                border: '1px solid #ccc',  
                backgroundColor: '#FFFFFF',
                padding: '6px 8px',
                width: '100%',
                '&:hover': {
                  borderColor: '#000',  
                },
                '&:focus': {
                  borderColor: '#1F2439',
                },
              }}
              placeholder="Search…"
              startAdornment={<SearchIcon sx={{ color: 'black' }} />}
            />
          </div>
        </div>

        <div>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <IconButton color="inherit">
            <HelpIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
