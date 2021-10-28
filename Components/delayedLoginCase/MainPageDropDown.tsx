import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import React, { ChangeEvent, useCallback, useState } from 'react'
import { routeList } from '../../Data/routeList'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'

export const MainPageDropDown: React.VFC = () => {
  const router = useRouter()
  const [route, setRoute] = useState(routeList[0].title)

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setRoute(event.target.value)
  }, [])

  const navigateToCase = useCallback((url: string) => {
    router.push(url)
  }, [])

  return (
    <Box component="form">
      <TextField
        select
        value={route}
        onChange={handleChange}
        sx={{ width: 200 }}
      >
        {routeList.map((el, index) => (
          <MenuItem key={index} value={el.title} onClick={() => navigateToCase(el.url)}>
            <Typography variant="subtitle1">{el.title}</Typography>
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
