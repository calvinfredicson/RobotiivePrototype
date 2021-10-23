import { Box, Button, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MainPageDropDown } from '../Components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Robotiive Prototype Cases</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box className={styles.main} gap={3}>
        <Typography fontFamily="-apple-system" className={styles.title}>Welcome to Robotiive Prototype</Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="h4">Choose your challenge</Typography>
          <MainPageDropDown />
        </Box>
      </Box>

      <footer className={styles.footer}>
        <a href="https://iscoollab.com/en/">
          <Box display="flex" alignItems="center" gap={2}>
            <Typography>Powered by <strong><i>IsCoolLab</i></strong></Typography>
            <Image src="/Images/robotiive_logo_orange.png" alt="Vercel Logo" width={50} height={50} />
          </Box>
        </a>
      </footer>
    </div>
  )
}

export default Home
