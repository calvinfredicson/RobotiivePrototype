import Image from 'next/image'
import { ArrowDropDownOutlined } from '@mui/icons-material'
import { Box, Paper, Typography, useTheme } from '@mui/material'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { delay, generateRoute } from '../../utilityFunctions'


interface CitrixPageItemProps {
  imageSrc: string,
  text: string,
  subtext?: string
}

export const CitrixPageItem: React.VFC<CitrixPageItemProps> = ({ imageSrc, text, subtext }) => {
  const theme = useTheme()
  const router = useRouter()
  const [initial, setInitial] = useState(true)
  const handleClick = useCallback(async () => {
    await delay(5)
    if (initial) {
      setInitial(false)
    } else {
      router.push(generateRoute(router.pathname, text))
    }
  }, [text, delay, initial, setInitial])

  return (
    <Box onClick={handleClick} component={Paper} variant="outlined" padding={3} display="inline-block" sx={{ cursor: 'pointer' }}>
      <Box display="flex" flexDirection="column">
        <Image
          src={imageSrc}
          alt=""
          width={200}
          height={200}
        />
        <Typography variant="h6" align="center" sx={{ marginTop: 3 }}><strong>{text}</strong></Typography>
        {subtext ? <Typography align="center" variant="subtitle2">{subtext}</Typography> : <br />}
        <ArrowDropDownOutlined fontSize="large" sx={{ margin: 'auto', marginTop: theme.spacing(2) }} />
      </Box>
    </Box>
  )
}

