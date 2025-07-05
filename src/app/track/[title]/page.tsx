'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/app/utils/supabaseClient';
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Chip,
  Stack,
  Link as MuiLink,
  Divider,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TrackHeader from '@/app/_components/TrackHeader/page';
import { VideoResource, SectionGroup } from '../../interfaces/video';

export default function TrackPage() {
  const params = useParams();
  const slug = decodeURIComponent(params?.title as string).toLowerCase();

  const [videos, setVideos] = useState<VideoResource[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [trackTitle, setTrackTitle] = useState<string>('');

  useEffect(() => {
    async function fetchVideos() {
      const { data: pathData, error: pathError } = await supabase
        .from('learning_paths')
        .select('id, title')
        .eq('slug', slug)
        .maybeSingle();

      if (!pathData || pathError) {
        console.error('TrackPage: No learning path found for slug:', slug);
        setVideos([]);
        setTrackTitle('');
        setLoading(false);
        return;
      }

      setTrackTitle(pathData.title);

      const { data: videosData, error: videosError } = await supabase
        .from('learning_videos')
        .select('*')
        .eq('path_id', pathData.id);

      if (!videosError && videosData) {
        setVideos(videosData as VideoResource[]);
      } else {
        console.error('Error fetching videos:', videosError?.message);
      }

      setLoading(false);
    }

    if (slug) fetchVideos();
  }, [slug]);

  const groupedSections = videos.reduce((acc: SectionGroup[], video) => {
    const sectionTitle = video.section || 'General';
    const existingSection = acc.find((s) => s.section === sectionTitle);
    if (existingSection) {
      existingSection.videos.push(video);
    } else {
      acc.push({ section: sectionTitle, videos: [video] });
    }
    return acc;
  }, []);

  return (
    <>
      <TrackHeader title={slug} />
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          color="primary"
          gutterBottom
        >
          Track Steps
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" mt={6}>
            <span className="loader"></span>
          </Box>
        ) : groupedSections.length === 0 ? (
          <Typography variant="body1" align="center">
            No videos available for this track.
          </Typography>
        ) : (
          groupedSections.map((group, index) => (
            <Card key={index} sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" color="primary">
                    {group.section} Resources
                  </Typography>
                  <Chip label={`${group.videos.length} Videos`} color="secondary" />
                </Box>
                <Divider sx={{ my: 2 }} />
                <Stack spacing={1}>
                  {group.videos.map((res) => (
                    <Box
                      key={res.id}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      p={1.5}
                      borderRadius={2}
                      sx={{ backgroundColor: '#F7F9FB' }}
                    >
                      <Box>
                        <MuiLink
                          href={res.link}
                          target="_blank"
                          underline="hover"
                          fontWeight={600}
                        >
                          {res.title} <OpenInNewIcon fontSize="small" />
                        </MuiLink>
                      </Box>
                      <Stack direction="row" spacing={1}>
                        <Chip label={res.language} size="small" />
                        <Chip
                          label={res.is_free ? 'Free' : 'Paid'}
                          size="small"
                          color={res.is_free ? 'success' : 'error'}
                        />
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          ))
        )}
      </Container>
    </>
  );
}
