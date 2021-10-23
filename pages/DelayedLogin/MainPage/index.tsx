import { ArrowDropDown } from '@mui/icons-material'
import { Box, Button, TextField, Typography, useTheme } from '@mui/material'
import { styled } from '@mui/system'
import { GetStaticPropsResult, NextPage } from 'next'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { PageItem, CitrixHeader } from '../../../Data/CitrixPageData'
import { CitrixPageItem, LoadingPage } from '../../../Components'
import { BasicInfoDialog } from '../../../Components/Dialogs'
import { useRouter } from 'next/router'
import { getAPI } from '../../../utilityFunctions'

interface MainPageProps {
  permission: boolean
}


const MainPage: NextPage<MainPageProps> = ({ permission }) => {
  const router = useRouter()
  useEffect(() => {
    if (!permission) {
      router.replace('/DelayedLogin/')
    }
  }, [permission])
  const theme = useTheme()

  const [search, setSearch] = useState("")
  const [pageItem, setPageItem] = useState(PageItem)
  const [dialogOpen, setDialogOpen] = useState(false)
  const pageInformation = "In this page, search for your app and click on them. After 5s if the app does not open, click again!"

  const doSearch = useCallback(() => {
    setPageItem(PageItem.filter((item) => item.text.toLowerCase().includes(search.toLowerCase())))
  }, [pageItem, search])

  const handleTextFieldChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [setSearch, search])

  const openInfoDialog = useCallback(() => {
    setDialogOpen(true)
  }, [])

  if (permission) {
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

export async function getStaticProps(): Promise<GetStaticPropsResult<MainPageProps>> {
  const permission = await getAPI('http://127.0.0.1:3000/api/login/')
  return {
    props: permission
  }
}