import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const LoadingPage = () => {
  return (
    <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" height="100vh" width="100vw">
      <Image
        src="https://i.ibb.co/JxG9bDv/loading.gif"
        alt="loading icon"
        width={200}
        height={200}
      />
      <Typography variant="h3">Loading...</Typography>
    </Box>
  )
}

