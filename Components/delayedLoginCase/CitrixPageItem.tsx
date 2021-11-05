import Image from 'next/image'
import { ArrowDropDownOutlined } from '@mui/icons-material'
import { Box, Paper, Typography, useTheme } from '@mui/material'

interface CitrixPageItemProps {
  imageSrc: string,
  text: string,
  subtext?: string,
  handleClick: () => void
}

export const CitrixPageItem: React.VFC<CitrixPageItemProps> = ({ imageSrc, text, subtext, handleClick }) => {
  const theme = useTheme()

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

