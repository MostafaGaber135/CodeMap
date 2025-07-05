import React from "react";
import NextLink from "next/link";
import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  Divider,
} from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#0a0f1c", color: "#FFFFFF", py: 6 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
        >
          <Box>
            <Stack direction="row" alignItems="center" spacing={1} mb={2}>
              <Typography variant="h5" fontWeight="bold">
                🗺️ CodeMap
              </Typography>
            </Stack>

            <Typography variant="body2" color="text.secondary" maxWidth={300}>
              A free educational platform aimed at making programming learning
              accessible to everyone through clear roadmaps and trusted
              resources.
            </Typography>
          </Box>

          <Stack spacing={1}>
            <Typography variant="subtitle1" fontWeight="bold">
              Roadmaps
            </Typography>
            {[
              "Frontend",
              "Backend",
              "Mobile App",
              "Networking & Network Engineering",
              "Cyber Security",
              "Kids Programming",
            ].map((item) => (
              <Typography key={item} variant="body2" >
                {item}
              </Typography>
            ))}
          </Stack>
        </Stack>

        <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)", my: 4 }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="caption">
            © {new Date().getFullYear()} CodeMap. All Rights Reserved | Made
            with Mostafa Gaber
          </Typography>

          <Stack direction="row" spacing={2}>
            {["Privacy", "Terms", "Help"].map((item) => (
              <Link
                key={item}
                component={NextLink}
                href={`/${item.toLowerCase()}`}
                underline="none"
                color="inherit"
                variant="caption"
              >
                {item}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
