import React from 'react';
import MyCalendar from './Calendar';
import ResourceLibrary from './ResourceLibrary';
import {
  Button,
  Tabs,
  Tab,
  AppBar,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';

const TabPanel = ({ children, value, index }) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && <Box p={3}>{children}</Box>}
  </div>
);

const studentResources = [
  {
    title: 'Virtual Interactive Modules',
    url: 'https://www.autismspeaks.org/virtual-activities-kids-autism#Learning',
    img: process.env.PUBLIC_URL + '/images/virtual-learning.jpg',
  },
  {
    title: 'Sensory Activities',
    url: 'https://www.autismspeaks.org/blog/10-sensory-activities-for-autism',
    img: process.env.PUBLIC_URL + '/images/sensory-play.jpg',
  },
  {
    title: 'Pablo (Cartoon)',
    url: 'https://www.youtube.com/results?search_query=pablo+cartoon+autism',
    img: process.env.PUBLIC_URL + '/images/pablo-cartoon.jpg',
  },
  {
    title: 'Cool Math Games',
    url: 'https://www.coolmathgames.com/',
    img: process.env.PUBLIC_URL + '/images/cool-math-games.jpg',
  },
];

const teacherResources = [
  {
    title: 'Downloadable Worksheets',
    url: 'https://www.teacherspayteachers.com/Browse/Search:autism%20worksheets',
    img: process.env.PUBLIC_URL + '/images/worksheets.jpg',
  },
  {
    title: 'Fitness Plans & Videos',
    url: 'https://www.youtube.com/results?search_query=fitness+autism+kids',
    img: process.env.PUBLIC_URL + '/images/fitness.jpg',
  },
  {
    title: 'Behavioral Strategies',
    url: 'https://www.autismspeaks.org/tool-kits',
    img: process.env.PUBLIC_URL + '/images/behavioral.jpg',
  },
  {
    title: 'Support Resources',
    url: 'https://www.autismspeaks.org/family-services',
    img: process.env.PUBLIC_URL + '/images/support.jpg',
  },
];

const LandingPage = () => {
  const [tab, setTab] = React.useState(0);
  const handleTabChange = (event, newValue) => setTab(newValue);

  return (
    <div style={{ backgroundColor: '#F5F5DC', minHeight: '100vh', fontFamily: 'Fredoka One, sans-serif', color: '#4a5c52' }}>
      <AppBar position="static" style={{ background: '#F5F5DC', boxShadow: 'none', padding: '1rem 2rem' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" style={{ color: '#4a5c52', fontWeight: 'bold' }}>
            St. Joseph's Villa
          </Typography>
          <Tabs value={tab} onChange={handleTabChange} textColor="primary" indicatorColor="primary">
            <Tab label="Home" />
            <Tab label="Students" />
            <Tab label="Teachers" />
            <Tab label="Resource Library" />
            <Tab label="Contact" />
          </Tabs>
        </Box>
      </AppBar>

      {/* HOME */}
      <TabPanel value={tab} index={0}>
        <Box textAlign="center" p={5} style={{ background: '#fefae0', borderRadius: '12px', margin: '2rem 3rem' }}>
          <Typography variant="h3" gutterBottom>Welcome to St. Joseph's Villa</Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            All children and families deserve the opportunity to thrive. We provide integrated, comprehensive support services to create a brighter future for everyone.
          </Typography>
          <Button
            variant="contained"
            style={{ backgroundColor: '#8FBC8F', color: 'white', marginTop: '1rem' }}
            onClick={() => setTab(4)} // index 4 = Contact tab
          >
            Get Involved
            </Button>
        </Box>

        <Box px={5}>
          <Typography variant="h4" gutterBottom>Our Core Services</Typography>
          <Grid container spacing={3}>
            {[
              {
                title: "Education Services",
                description: "Supporting students with autism and behavioral challenges through collaborative school partnerships.",
                img: process.env.PUBLIC_URL + '/images/education.jpg'
              },
              {
                title: "Mental & Behavioral Health",
                description: "Providing therapeutic services, crisis stabilization, and behavioral support.",
                img: process.env.PUBLIC_URL + '/images/mental-health.jpg'
              },
              {
                title: "Housing & Homeless Support",
                description: "Delivering rapid rehousing and assistance across the Richmond region.",
                img: process.env.PUBLIC_URL + '/images/housing.jpg'
              }
            ].map((service, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card>
                  <CardMedia component="img" height="140" image={service.img} alt={service.title} />
                  <CardContent>
                    <Typography variant="h6">{service.title}</Typography>
                    <Typography variant="body2">{service.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

      <Box p={5} mt={4} style={{ background: '#fefae0', borderRadius: '12px', margin: '2rem 3rem' }}>
          <Typography variant="h4" gutterBottom>What Families Say</Typography>
          <Grid container spacing={3}>
            {[
              {
                quote: "I was looking for an environment that would accept my daughter for who she was, no matter what. Now she’s happy, she’s learning, and her goals are higher.",
                author: "— Heather, Parent"
              },
              {
                quote: "It takes the right type of people, and they are definitely at St. Joseph’s Villa. They really care about my son. I’ll forever be grateful for that.",
                author: "— Richelle, Parent"
              }
            ].map((testimonial, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card style={{ padding: '1rem' }}>
                  <CardContent>
                    <Typography variant="body1" gutterBottom>"{testimonial.quote}"</Typography>
                    <Typography variant="subtitle2" color="textSecondary">{testimonial.author}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box p={5}>
          <Typography variant="h4" gutterBottom>Upcoming Activities</Typography>
          <MyCalendar />
        </Box>
      </TabPanel>

      {/* STUDENTS */}
      <TabPanel value={tab} index={1}>
        <Typography variant="h5" gutterBottom>Student Resources</Typography>
        <Grid container spacing={2}>
          {studentResources.map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card onClick={() => window.open(item.url, '_blank')} sx={{ cursor: 'pointer', height: '100%' }}>
                <CardMedia component="img" height="140" image={item.img} alt={item.title} />
                <CardContent>
                  <Typography variant="subtitle1">{item.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      {/* TEACHERS */}
      <TabPanel value={tab} index={2}>
        <Typography variant="h5" gutterBottom>Teacher Resources</Typography>
        <Grid container spacing={2}>
          {teacherResources.map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card onClick={() => window.open(item.url, '_blank')} sx={{ cursor: 'pointer', height: '100%' }}>
                <CardMedia component="img" height="140" image={item.img} alt={item.title} />
                <CardContent>
                  <Typography variant="subtitle1">{item.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      {/* RESOURCE LIBRARY */}
      <TabPanel value={tab} index={3}>
        <ResourceLibrary />
      </TabPanel>

      {/* CONTACT */}
      <TabPanel value={tab} index={4}>
        <Typography variant="h6">Contact Us</Typography>
        <Typography>Email: support@stjosephsvilla.org</Typography>
      </TabPanel>
    </div>
  );
};

export default LandingPage;
