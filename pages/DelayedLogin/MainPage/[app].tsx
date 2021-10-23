import { Box, Button, Divider, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useCallback, useMemo } from 'react'
import { PageItem } from '../../../Data/CitrixPageData'

const Detail: NextPage = () => {
  const router = useRouter()
  const { app } = router.query
  const appItem = useMemo(() => {
    if (!app) return
    const item = PageItem.find(item => item.text.toLowerCase() == (app as string).toLowerCase())
    return item
  }, [app, PageItem])

  const backToMenu = useCallback(() => {
    router.replace("/")
  }, [router])
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" width="100vw">
      {
        appItem ? (
          <>
            <Image
              src={appItem.imagesrc}
              alt="Success Logo Picture"
              width={200}
              height={200}
            />
            <Typography variant="h6" sx={{ marginTop: 3 }}>Congratulations you have successfully opened <strong><i><u>{app}</u></i></strong> App</Typography>
            <Button onClick={backToMenu} variant="contained" color="primary" sx={{ marginTop: 2 }}>Back to Home</Button>
          </>
        ) : (
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="h3">404</Typography>
            <Divider orientation="vertical" />
            <Typography variant="h2">Not Found</Typography>
          </Box>
        )}
    </Box>
  )
}

export default Detail
