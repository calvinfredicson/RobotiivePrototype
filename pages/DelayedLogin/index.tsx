import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { FormEvent, useCallback, useState } from 'react'
import { Account } from '../../Data/loginInfo'
import { InfoDialog } from '../../Components/Dialogs'
import { generateRoute, getAPIRoute, postAPI } from '../../utilityFunctions'

const DelayedLogin: NextPage = () => {
  const router = useRouter()
  const [openDialog, setOpenDialog] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [wrongCredentials, setWrongCredentials] = useState(false)

  const submitForm = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await postAPI(getAPIRoute('loginAPI') as unknown as string, { email: email, password: password })
    setEmail("")
    setPassword("")
    if (res.permission) {
      router.replace(generateRoute(router.pathname, 'MainPage'))
    }
  }, [email, password, Account])

  const showInfoDialog = useCallback(() => {
    setOpenDialog(true)
  }, [])

  return (
    <Box display="flex" height="100vh" alignItems="center" justifyContent="center">
      <form onSubmit={submitForm}>
        <Box component={Paper} variant="outlined" display="flex" flexDirection="column" alignItems="center" padding={7} gap={5}>
          <Typography variant="h2"><b>PLEASE SIGN IN</b></Typography>
          <Box display="flex" flexDirection="column" gap={2} width="100%">
            {wrongCredentials && <Typography style={{ color: 'red' }}>Wrong email or password !</Typography>}
            <TextField type="email" value={email} onChange={e => setEmail(e.target.value)} variant="outlined" placeholder="Enter UserName" fullWidth sx={{ backgroundColor: 'white' }} />
            <TextField type="password" value={password} onChange={e => setPassword(e.target.value)} variant="outlined" placeholder="Enter Password" fullWidth sx={{ backgroundColor: 'white' }} />
            <Button type="submit" size="large" variant="contained" color="primary">Sign In</Button>
            <Button type="button" onClick={showInfoDialog} size="large" variant="outlined" color="info">Info</Button>
            <InfoDialog open={openDialog} stateSetter={setOpenDialog} />
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default DelayedLogin
