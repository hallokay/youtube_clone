import React from 'react';
import { Stack, Box } from '@mui/material'
import { ChannelCard, VideoCard } from './index'
const Videos = ({videos, direction}) => {
  
  if(!videos?.length) return "Loading..."
  // console.log("videos", videos);

  return (
    <Stack
      direction={"row" || direction}
      justifyContent="flex-start"
      flexWrap="wrap"
      gap={2}
      sx={{ width: "100%" }}
    >
      {videos.map((item, idx) => (
        <Box
          sx={{ width: { xs: "100%", sm: "358px", md: "320px", lg: "300px" } }}
          key={idx}
        >
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos