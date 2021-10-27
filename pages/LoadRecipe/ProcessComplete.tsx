import { Box, Button, Typography } from "@mui/material"
import { NextPage } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import { LoadingPage } from "../../Components"

const ProcessComplete: NextPage = () => {
  const router = useRouter()
  const toMenu = useCallback(() => {
    router.replace("/")
  }, [])

  return (
    <Box height="100vh" width="100vw" display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap={3}>
      <Image src="/images/success.gif" alt="success-icon" height={200} width={200} />
      <Typography variant="h3">Recipe Successfully Uploaded!!</Typography>
      <Button size="large" variant="outlined" onClick={toMenu}>Back to Menu</Button>
    </Box>
  )
}

export default ProcessComplete