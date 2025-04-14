import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

const resources = [
  {
    title: 'Autism Worksheets PDF',
    description: 'Printable worksheets to support learning and communication skills.',
    type: 'pdf',
    link: '/resources/autism-worksheets.pdf',
    image: '/images/worksheets.jpg',
  },
  {
    title: 'Fitness Plan (Printable)',
    description: 'A visual weekly fitness planner for children.',
    type: 'pdf',
    link: '/resources/fitness-plan.pdf',
    image: '/images/fitness.jpg',
  },
  {
    title: 'Behavior Strategy Toolkit',
    description: 'Downloadable guide to help manage behaviors in and out of class.',
    type: 'pdf',
    link: '/resources/behavior-strategies.pdf',
    image: '/images/behavioral.jpg',
  },
  {
    title: 'Fitness Video Playlist',
    description: 'A kid-friendly YouTube playlist for movement and mindfulness.',
    type: 'video',
    link: 'https://www.youtube.com/results?search_query=autism+kids+fitness+video',
    image: '/images/support.jpg',
  },
];

const ResourceLibrary = () => (
  <Box p={4} style={{ backgroundColor: '#f9f9f9' }}>
    <Typography variant="h4" gutterBottom>Resource Library</Typography>
    <Typography variant="body1" mb={4}>Explore downloadable materials and videos designed to support learning, behavior, and physical wellness.</Typography>

    <Grid container spacing={3}>
      {resources.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia component="img" height="140" image={item.image} alt={item.title} />
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2" color="textSecondary">{item.description}</Typography>
            </CardContent>
            <CardActions style={{ marginTop: 'auto' }}>
              <Button
                size="small"
                variant="contained"
                color="primary"
                href={item.link}
                target="_blank"
              >
                {item.type === 'video' ? 'Watch Video' : 'Download PDF'}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ResourceLibrary;
