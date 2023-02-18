import { useState, useEffect } from "react"
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from "../components";

const Feed = () => {


  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
     {/* 사이드바 영역의 박스 */}
      <Box
        sx={{
          bgcolor:'#66646421',
          height: { xs: 'auto', md: '92vh' },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <SideBar />
        <Typography className="copyright"
          variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2023 JSM Media
        </Typography>
      </Box>

      {/* 영화 리스트 박스 */}
      <Box 
        p={2}
        sx={{ overflowY: 'auto', height: '90vh', flex: 2 }} >
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{color: '#fff'}}>
          New
          <span style={{ color: '#F31503'}}>Video</span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  );
}

export default Feed