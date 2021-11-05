import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import React, { ChangeEvent, useCallback, useState } from 'react'
import { routeList } from '../../Data/routeList'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'

export const MainPageDropDown: React.VFC = () => {
  const router = useRouter()
  const [route, setRoute] = useState<string | undefined>()

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const challenge = routeList.find(el => el.title == event.target.value)!
    setRoute(challenge.title)
    router.push(challenge.url)
  }, [routeList])

  return (
    <Box component="form">
      <TextField
        select
        value={route}
        label="Select Challenge"
        variant="outlined"
        onChange={handleChange}
        sx={{ width: 200 }}
      >
        {routeList.map((el, index) => (
          <MenuItem key={index} value={el.title}>
            <Typography variant="subtitle1">{el.title}</Typography>
          </MenuItem>
        ))}
      </TextField>
    </Box>
  )
}
