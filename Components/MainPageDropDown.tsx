import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { routeList } from '../Data/routeList'
import { ChangeEvent, useCallback, useState } from 'react'
import Link from 'next/link'

export const MainPageDropDown: React.VFC = () => {
  const [route, setRoute] = useState(routeList[0].title)

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setRoute(event.target.value);
  }, [])

  return (
    <Box component="form">
      <div>
        <TextField
          id="outlined-select-currency"
          select
          value={route}
          onChange={handleChange}
        >
          {routeList.map((el, index) => (
            <MenuItem key={index} value={el.title}>
              <Link href={el.url}>{el.title}</Link>
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
