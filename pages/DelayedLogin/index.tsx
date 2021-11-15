import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, IconButton, InputAdornment, OutlinedInput, Paper, TextField, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import React, { FormEvent, useCallback, useState } from 'react'
import { LoadingPage } from '../../Components'
import { InfoDialog } from '../../Components/Dialogs'
import { checkLogin } from '../../MockBackend'

const DelayedLogin: NextPage = () => {
  const router = useRouter()
  const [openDialog, setOpenDialog] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const submitForm = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const loginResult = await checkLogin(email, password)
    setEmail("")
    setPassword("")
    if (loginResult.status) {
      router.replace("/DelayedLogin/MainPage")
      setLoading(false)
      return
    } else {
      setErrorMessage(loginResult.message)
      setLoading(false)
    }
  }, [email, password, router])

  const showInfoDialog = useCallback(() => {
    setOpenDialog(true)
  }, [])

  if (!loading) {
    return (
      <Box display="flex" height="100vh" alignItems="center" justifyContent="center">
        <form onSubmit={submitForm}>
          <Box component={Paper} variant="outlined" display="flex" flexDirection="column" alignItems="center" padding={7} gap={5}>
            <Typography variant="h2"><b>PLEASE SIGN IN</b></Typography>
            <Box display="flex" flexDirection="column" gap={2} width="100%">
              {errorMessage && <Typography color="red">{errorMessage}</Typography>}
              <TextField type="email" value={email} onChange={e => setEmail(e.target.value)} variant="outlined" placeholder="Enter UserName" fullWidth sx={{ backgroundColor: 'white' }} />
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter Password"
                fullWidth
                sx={{ backgroundColor: 'white' }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <Button type="submit" size="large" variant="contained" color="primary">Sign In</Button>
              <Button type="button" onClick={showInfoDialog} size="large" variant="outlined" color="info">Info</Button>
              <InfoDialog open={openDialog} stateSetter={setOpenDialog} />
            </Box>
          </Box>
        </form>
      </Box>
    )
  } else {
    return <LoadingPage />
  }
}

export default DelayedLogin
