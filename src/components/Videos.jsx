import React from 'react';
import { Stack, Box } from '@mui/material'
import { ChannelCard, VideoCard } from './index'
const Videos = ({videos, direction}) => {
  
  if(!videos?.length) return "Loading..."
  console.log("videos", videos);

  return (
    <Stack
      direction={"row" || direction}
      justifyContent="start"
      flexWrap="wrap"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos