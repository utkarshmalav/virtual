import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const DrawerComponent = () => {
  const location = useLocation(); // Hook to get the current route

  const items = [
    { text: 'Aim', path: '/aim' },
    { text: 'Theory', path: '/theory' },
    { text: 'Pretest', path: '/pretest' },
    { text: 'Procedure', path: '/procedure' },
    { text: 'Simulation', path: '/simulation' },
    { text: 'Posttest', path: '/posttest' },
    { text: 'References', path: '/references' },
    { text: 'Feedback', path: '/feedback' }
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <List>
        {items.map(({ text, path }) => (
          <ListItem 
            button 
            key={text} 
            component={Link} 
            to={path}
            sx={{
              backgroundColor: location.pathname === path ? '#fff3e0' : 'transparent', // Light orange background for active item
              color: location.pathname === path ? '#ff9800' : 'inherit',  // Active text color (orange)
              '&:hover': {
                backgroundColor: '#fff3e0', // Background on hover (light orange)
              },
              borderLeft: location.pathname === path ? '4px solid #ff9800' : 'none', // Orange border for active item
            }}
          >
            <ListItemText 
              primary={text} 
              sx={{ 
                textDecoration: location.pathname === path ? 'underline' : 'none',  // Underline active text
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
