import React from 'react';
import { Container, Typography, Paper, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function Terms() {
  return (
    <Container maxWidth="md" sx={{ py: 4, minHeight: '60vh' }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom color="primary">
          Terms and Conditions
        </Typography>
        <Typography variant="body1" >
          Welcome to CodeMap. By accessing and using our platform, you agree to comply with the following terms and conditions. You acknowledge that the content and roadmaps provided by CodeMap are for informational purposes only. CodeMap reserves the right to modify these terms at any time. It is your responsibility to periodically review this page for updates. Unauthorized use or reproduction of the materials provided by CodeMap is strictly prohibited without prior written consent.
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button variant="contained" color="primary" component={Link} href="/">
            Return to Home
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}