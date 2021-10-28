import { Box, Button, Typography } from "@mui/material"
import { NextPage } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { useCallback } from "react"

const ProcessComplete: NextPage = () => {
  const router = useRouter()
  const toMenu = useCallback(() => {
    router.replace("http://localhost:3000/")
  }, [])

  return (
    <Box height="100vh" width="100vw" display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap={3}>
      <Image src="https://i.ibb.co/7ShVk7F/success.gif" alt="success-icon" height={200} width={200} />
      <Typography variant="h3">You have successfully completed this challenge!!</Typography>
      <Button size="large" variant="outlined" onClick={toMenu}>Back to Menu</Button>
    </Box>
  )
}

export default ProcessComplete