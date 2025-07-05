import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function Help() {
  return (
    <Container maxWidth="md" sx={{ py: 4, minHeight: '60vh' }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom color="primary">
          Help & Support
        </Typography>
        <Typography variant="body1" >
          We are here to assist you. Below you will find answers to some commonly asked questions. If your query is not addressed here, please feel free to contact us.
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="How can I contact support?"
              secondary="Email us directly at support@codemap.com. We typically respond within 24 hours."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="How do I suggest new roadmaps?"
              secondary="We welcome your suggestions! Please send your ideas to suggestions@codemap.com."
            />
          </ListItem>
        </List>
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button variant="contained" color="primary" component={Link} href="/">
            Return to Home
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
