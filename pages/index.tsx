import { Box, Button, Paper, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MainPageDropDown } from '../Components'

const Home: NextPage = () => {
  return (
    <Box width="100vw" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Head>
        <title>Robotiive Prototype Cases</title>
        <meta name="description" content="Robotiive Prototype System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display="grid" gap={5} width="100%">
        <Typography variant="h2" fontWeight={1000} align="center">Welcome to Robotiive Prototype</Typography>
        <Box display="flex" alignItems="center" gap={2} justifyContent="center">
          <Typography variant="h4">Choose your challenge</Typography>
          <MainPageDropDown />
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" padding={4} component={Paper} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <a href="https://iscoollab.com/en/">
          <Box display="flex" alignItems="center" gap={2}>
            <Typography>Powered by <strong><i>IsCoolLab</i></strong></Typography>
            <Image src="https://i.ibb.co/vwD8BHr/robotiive-logo-orange.png" alt="Vercel Logo" width={50} height={50} />
          </Box>
        </a>
      </Box>
    </Box>
  )
}

export default Home
