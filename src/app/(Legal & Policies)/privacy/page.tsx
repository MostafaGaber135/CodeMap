import React from 'react';
import { Container, Typography, Paper, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function Privacy() {
  return (
    <Container maxWidth="md" sx={{ py: 4, minHeight: '60vh' }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom color="primary">
          Privacy Policy
        </Typography>
        <Typography variant="body1" >
          At CodeMap, your privacy is our top priority. We collect minimal personal information solely to enhance your user experience. The data collected is strictly confidential and will never be shared with third parties without your explicit consent. We employ industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. By using our services, you agree to the collection and use of information in accordance with this policy.
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