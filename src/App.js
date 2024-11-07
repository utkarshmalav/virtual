import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DrawerComponent from './DrawerComponent';
import HeaderComponent from './HeaderComponent'; 
import Aim from './pages/Aim';
import Theory from './pages/Theory';
import Pretest from './pages/Pretest';
import Procedure from './pages/Procedure';
import Simulation from './pages/Simulation';
import Posttest from './pages/Posttest';
import References from './pages/References';
import Feedback from './pages/Feedback';
import { Box, CssBaseline, Toolbar } from '@mui/material';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control drawer open/close

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen); // Toggle the drawer open state
  };

  return (
    <Router>
      <CssBaseline />
      <HeaderComponent onDrawerToggle={handleDrawerToggle} /> {/* Pass toggle function to Header */}
      <Box sx={{ display: 'flex' }}>
        <DrawerComponent open={drawerOpen} onClose={handleDrawerToggle} /> {/* Pass open state and close handler */}
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, height: '100vh', overflow: 'auto', marginTop: '64px' }} // Offset for fixed header
        >
          <Toolbar />
          <Routes>
            <Route path="/Aim" element={<Aim />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/pretest" element={<Pretest />} />
            <Route path="/procedure" element={<Procedure />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/posttest" element={<Posttest />} />
            <Route path="/references" element={<References />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
