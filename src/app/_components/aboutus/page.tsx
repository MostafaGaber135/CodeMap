import React from 'react';
import { Box, Typography, Card, CardContent, Container, Stack } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import UpdateIcon from '@mui/icons-material/Update';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const features = [
  {
    icon: <AttachMoneyIcon sx={{ fontSize: 40 }} color="primary" />,
    title: 'Free Resources',
    description: 'All resources are free or low-cost from the best global platforms',
  },
  {
    icon: <LanguageIcon sx={{ fontSize: 40 }} color="primary" />,
    title: 'Arabic & English Content',
    description: 'Diverse resources in both Arabic and English to suit all levels',
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 40 }} color="primary" />,
    title: 'For All Ages',
    description: 'Customized paths for children, students, graduates and professionals',
  },
  {
    icon: <UpdateIcon sx={{ fontSize: 40 }} color="primary" />,
    title: 'Constantly Updated',
    description: 'Content updated with the latest technologies and market trends',
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 40 }} color="primary" />,
    title: 'Personalized Recommendations',
    description: 'Receive learning paths and courses tailored specifically to your interests and goals.',
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 40 }} color="primary" />,
    title: 'Community Support',
    description: 'Join an active community, ask questions, share knowledge, and grow with fellow learners.',
  },
];

export default function AboutUs() {
  return (
    <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Why CodeMap?
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={4}>
        A comprehensive platform that brings together the best educational resources in one place
      </Typography>

      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={4}>
        {features.map((feature) => (
          <Card
            elevation={6}
            sx={{
              borderRadius: 3,
              bgcolor: '#FFFFFF',
              p: 3,
              width: { xs: '100%', sm: '45%', md: '30%' },
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                transform: 'scale(1.05) translateX(8px) rotate(1deg)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                '&::after': {
                  transform: 'scaleX(1)',
                },
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '3px',
                bgcolor: 'primary.main',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.3s ease',
              },
            }}
            key={feature.title}
          >
            <CardContent>
              <Box
                sx={{
                  bgcolor: '#F5F7FB',
                  mx: 'auto',
                  mb: 2,
                  width: 70,
                  height: 70,
                  borderRadius: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
              >
                {feature.icon}
              </Box>
              <Typography variant="h6" color="primary" fontWeight="medium">
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
