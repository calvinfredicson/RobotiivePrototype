import { ArrowDropDown } from '@mui/icons-material'
import { Box, Button, TextField, Typography, useTheme } from '@mui/material'
import { styled } from '@mui/system'
import { NextPage } from 'next'
import { ChangeEvent, useCallback, useState, useEffect, useMemo } from 'react'
import { PageItem, CitrixHeader } from '../../../Data/CitrixPageData'
import { CitrixPageItem, LoadingPage } from '../../../Components'
import { BasicInfoDialog } from '../../../Components/Dialogs'
import { useRouter } from 'next/router'
import { delay } from '../../../utilityFunctions'

const MainPage: NextPage = () => {
  const theme = useTheme()
  const router = useRouter()
  const [search, setSearch] = useState("")
  const [pageItem, setPageItem] = useState(PageItem)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [initialClick, setInitialClick] = useState(true)
  const pageInformation = "In this page, search for your app and click on them. After 5s if the app does not open, click again!"
  const [loading, setLoading] = useState(false)

  const doSearch = useCallback(() => {
    setPageItem(PageItem.filter((item) => item.text.toLowerCase().includes(search.toLowerCase())))
  }, [pageItem, search])

  const handleTextFieldChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [setSearch, search])

  const openInfoDialog = useCallback(() => {
    setDialogOpen(true)
  }, [])

  const handleItemClick = useCallback(async (item: string) => {
    setLoading(true)
    await delay(5)
    if (!initialClick) {
      router.replace(`http://localhost:3000/DelayedLogin/MainPage/${item}`)
    } else {
      setInitialClick(false)
    }
    setLoading(false)
  }, [initialClick])

  if (!loading) {
    return (
      <Box height="100vh" width="100vw" overflow="none visible">
        <Box padding={theme.spacing(5)} color="white" bgcolor="gray" height={100} display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">Prototype <strong>StoreFront</strong></Typography>
          <Box display="flex" justifyContent="center" height={100}>
            {
              CitrixHeader.map((item, index) => (
                <Content key={index} height={100} width={150} padding={theme.spacing(2)} display="flex" alignItems="center" flexDirection="column">
                  <item.icon fontSize="large" sx={{ flex: 1 }} />
                  <Typography>{item.description}</Typography>
                </Content>
              ))
            }
          </Box>
          <Box display="flex" alignItems="center">
            <Button onClick={openInfoDialog} variant="text" color="inherit">
              <Typography>PAGE INFO</Typography>
              <ArrowDropDown sx={{ marginLeft: 1 }} />
            </Button>
            <BasicInfoDialog open={dialogOpen} stateSetter={setDialogOpen} info={pageInformation} />

          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end" padding={theme.spacing(4, 5)}>
          <TextField onKeyUp={doSearch} value={search} placeholder="Search Apps" onChange={handleTextFieldChange} />
        </Box>
        <Box display="flex" flexWrap="wrap" gap={2} padding={4} paddingTop={0}>
          {
            pageItem.map((item, index) => (
              <CitrixPageItem
                key={index}
                imageSrc={item.imagesrc}
                text={item.text}
                subtext={item.subtext ?? ""}
                handleClick={() => handleItemClick(item.text)}
              />
            ))
          }
        </Box>
      </Box>
    )
  } else {
    return <LoadingPage />
  }
}


export default MainPage

const Content = styled(Box, { name: 'ContentBox' })(() => ({
  '&:hover': {
    opacity: 0.2,
    transition: 0.3
  }
}))