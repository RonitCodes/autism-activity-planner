import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

const ActivityTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="activity categories">
        <Tab label="Outdoor Activities" />
        <Tab label="Indoor Activities" />
        <Tab label="Group Activities" />
        {/* Add more tabs as needed */}
      </Tabs>
      <TabPanel value={value} index={0}>
        {/* Content for Outdoor Activities */}
        <Typography>List of outdoor activities...</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Content for Indoor Activities */}
        <Typography>List of indoor activities...</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Content for Group Activities */}
        <Typography>List of group activities...</Typography>
      </TabPanel>
      {/* Add more TabPanels corresponding to the tabs */}
    </Box>
  );
};

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default ActivityTabs;
