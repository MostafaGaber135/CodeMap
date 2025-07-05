'use client';

import { Box, Typography, Stack, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import { Props, TrackData } from "../../interfaces/track";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function TrackHeader({ title }: Props) {
  const [track, setTrack] = useState<TrackData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchTrack = async () => {
      const { data, error } = await supabase
        .from("learning_paths")
        .select("title, description, duration")
        .eq("slug", title)
        .maybeSingle();

      if (error || !data) {
        console.error("Supabase Error:", error?.message || "No data returned");
      } else {
        setTrack(data);
      }
    };

    fetchTrack();
  }, [title]);

  if (!track) return null;

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #1e2a38, #0d1117)",
        py: 5,
        px: { xs: 3, md: 10 },
        color: "#fff",
      }}
    >
      <IconButton
         onClick={() => router.push("/")}
        sx={{
          color: "#fff",
          mb: 1,
          borderRadius: 1,
          px: 1,
          py: 0.5,
          border: "1px solid rgba(255,255,255,0.3)",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
        }}
        aria-label="Back"
      >
        <ArrowBackIcon sx={{ fontSize: 20 }} />
        <Typography variant="body2" sx={{ ml: 1, fontWeight: 500 }}>
          Back to Paths
        </Typography>
      </IconButton>

      <Typography variant="h4" fontWeight="bold">
        {track.title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ mt: 1, width: { xs: "100%", md: "55%" } }}
      >
        {track.description}
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" mt={2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <AccessTimeIcon />
          <Typography variant="body2">{track.duration}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
