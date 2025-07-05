"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Box, Typography, Card, CardContent, Chip, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import PaletteIcon from "@mui/icons-material/Palette";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import SecurityIcon from "@mui/icons-material/Security";
import PublicIcon from "@mui/icons-material/Public";
import CloudIcon from "@mui/icons-material/Cloud";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import { LearningPath } from "@/app/interfaces/learningPath";


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const iconMap: Record<string, React.ReactElement> = {
  palette: <PaletteIcon fontSize="large" color="primary" />,
  settings: <SettingsIcon fontSize="large" color="primary" />,
  lock: <LockIcon fontSize="large" color="primary" />,
  smartphone: <SmartphoneIcon fontSize="large" color="primary" />,
  shield: <SecurityIcon fontSize="large" color="primary" />,
  globe: <PublicIcon fontSize="large" color="primary" />,
  cloud: <CloudIcon fontSize="large" color="primary" />,
  kids: <ChildCareIcon fontSize="large" color="primary" />,
};

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-12px)",
    boxShadow: theme.shadows[6],
  },
  borderRadius: 20,
  borderTop: `6px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.background.paper,
  width: "100%",
  maxWidth: 360,
  cursor: "pointer",
}));

export default function LearningPaths({ id }: { id?: string }) {
  const [paths, setPaths] = useState<LearningPath[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPaths = async () => {
      const { data, error } = await supabase
        .from("learning_paths")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Supabase error:", error.message);
      } else {
        setPaths(data || []);
      }
      setLoading(false);
    };

    fetchPaths();
  }, []);

  const handleCardClick = (slug: string) => {
    router.push(`/track/${encodeURIComponent(slug)}`);
  };

  return (
    <Box id={id} sx={{ px: 4, py: 6, backgroundColor: "background.default" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Choose Your Learning Path
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary">
        Carefully designed roadmaps to take you from beginner to professional in
        your favorite field
      </Typography>

      <Box display="flex" justifyContent="center" mt={2}>
        <Box
          sx={{
            width: 80,
            height: 4,
            borderRadius: 2,
            backgroundColor: "primary.main",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scaleX(1.2)",
            },
          }}
        />
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={6}>
          <span className="loader"></span>
        </Box>
      ) : (
        <Box
          mt={6}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          flexWrap="wrap"
          justifyContent="center"
          gap={4}
        >
          {paths.map((path) => {
            const iconKey = path.icon_type?.toLowerCase().trim();
            const IconComponent = iconMap[iconKey] ?? (
              <PaletteIcon fontSize="large" color="primary" />
            );

            return (
              <StyledCard
                key={path.id}
                elevation={3}
                onClick={() => handleCardClick(path.slug)}
              >
                <CardContent>
                  <Box display="flex" justifyContent="center" mb={2}>
                    {IconComponent}
                  </Box>
                  <Typography
                    variant="h6"
                    align="center"
                    fontWeight="bold"
                    color="text.primary"
                  >
                    {path.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    color="text.secondary"
                    mt={1}
                  >
                    {path.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    color="text.secondary"
                    mt={1}
                  >
                    🕒 Duration: {path.duration}
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={1}
                    mt={2}
                    flexWrap="wrap"
                  >
                    {path.technologies.map((tech, idx) => (
                      <Chip
                        label={tech}
                        key={idx}
                        variant="outlined"
                        size="small"
                        color="primary"
                      />
                    ))}
                  </Stack>
                </CardContent>
              </StyledCard>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
