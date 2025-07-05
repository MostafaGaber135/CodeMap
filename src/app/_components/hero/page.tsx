"use client";

import { Box, Typography, Button, Stack } from "@mui/material";

export default function Hero() {
  const scrollToLearningPaths = () => {
    document
      .getElementById("learning-paths")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 10,
        textAlign: "center",
        px: 2,
        background: "linear-gradient(to bottom, #1e2a38, #0d1117)",
        color: "white",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        sx={{
          transition: "all 0.4s ease",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.05)",
            opacity: 0.95,
          },
        }}
      >
        🗺️ CodeMap
      </Typography>

      <Typography variant="h5" sx={{ mb: 2 }}>
        Your Free Programming Learning Path
      </Typography>

      <Typography variant="body1" sx={{ maxWidth: 600, mb: 4 }}>
        Discover the best free resources to learn programming and technology in
        Arabic and English, with clear roadmaps for all specializations.
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={scrollToLearningPaths}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: "bold",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          Start Your Journey
        </Button>
      </Stack>

      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        sx={{
          mt: 6,
          width: 24,
          height: 24,
          fill: "none",
          stroke: "#ccc",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          animation: "bounceDown 2s infinite ease-in-out",
          opacity: 0.7,
        }}
      >
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
      </Box>
    </Box>
  );
}
