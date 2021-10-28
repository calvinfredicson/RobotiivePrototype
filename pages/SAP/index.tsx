import { Box, Typography, ListItemButton, ListItemText, ListItemIcon, ListSubheader, List, Collapse, Divider, useTheme, Paper, Button } from '@mui/material'
import { NextPage } from 'next'
import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { ChevronRight, ExpandLess, ExpandMore, Folder, LastPage } from '@mui/icons-material'
import { CheckIDDialog, ConfirmDialog } from '../../Components/Dialogs'
import { CustomTable } from '../../Components'
import { FinancialReportMockData } from '../../Data/sapData'
import { useRouter } from 'next/router'

export interface DialogCheckerDataType {
  id: string,
  date: string
}

const SAP: NextPage = () => {
  const theme = useTheme()
  const router = useRouter()
  const [openDialog, setOpenDialog] = useState(false)
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false)
  const [confirmReturn, setConfirmReturn] = useState(false)
  const [dialogData, setDialogData] = useState<DialogCheckerDataType | null>(null)
  const financeData = useMemo(() => {
    const financeData = FinancialReportMockData.find(data => data.id == dialogData?.id)
    if (financeData) {
      return financeData.data
    }
  }, [FinancialReportMockData, dialogData])
  const doExport = useCallback(() => {
    if (!financeData) return
    setConfirmDialogOpen(true)
  }, [confirmReturn, financeData])

  useEffect(() => {
    if (confirmReturn) {
      router.replace("http://localhost:3000/ProcessComplete")
    }
  }, [confirmReturn])

  return (
    <Box bgcolor="#e9f0f6" paddingTop={6} width="100vw" height="100vh" display="flex" flexDirection="column" overflow="auto visible">
      <Box padding={1} bgcolor="#3b5eb0" color="white" style={{ position: "fixed", top: 0, width: "100%", zIndex: 2 }}>
        <Typography variant="h5">SAP GUI Options - SAP Logon Prototype</Typography>
      </Box>
      <Box display="grid" gridTemplateColumns="300px auto" padding={2} width="100%" height="100%" overflow="auto visible" gap={2}>
        <List
          sx={{ width: 300, bgcolor: 'background.paper' }}
          component={Paper}
          subheader={
            <ListSubheader component={Box}>
              <Typography variant="h5" sx={{ margin: theme.spacing(2, 'auto') }}>Main Menu</Typography>
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ChevronRight />
            <ListItemIcon sx={{ marginLeft: 2 }}>
              <Folder />
            </ListItemIcon>
            <ListItemText primary="Single Menu" />
          </ListItemButton>
          {
            list.map((item, index) => (
              <MenuDropDown title={item.title} sublist={item.subMenu} key={index} />
            ))
          }
        </List>
        <Box component={Paper} padding={2} sx={{ minWidth: 500 }} display="flex" flexDirection="column" gap={2}>
          <Button onClick={() => setOpenDialog(true)} variant="outlined" sx={{ width: 'fit-content' }}>Check Receipt ID</Button>
          <CheckIDDialog open={openDialog} stateSetter={setOpenDialog} info="show something" data={setDialogData} />
          {
            financeData ? <CustomTable data={financeData} /> : <Typography variant="h2">No data Found!</Typography>
          }
          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" sx={{ width: "fit-content" }} onClick={doExport}>Export Data</Button>
            <ConfirmDialog open={confirmDialogOpen} stateSetter={setConfirmDialogOpen} exportData={setConfirmReturn} />
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default SAP

interface MenuDropDownProps {
  title: string,
  sublist?: string[]
}

const MenuDropDown: React.VFC<MenuDropDownProps> = ({ title, sublist }) => {
  const [expand, setExpand] = useState(false)
  const toggleDropdown = useCallback(() => {
    setExpand(!expand)
  }, [expand, setExpand])

  return (
    <>
      <ListItemButton onClick={toggleDropdown}>
        {expand ? <ExpandLess /> : <ExpandMore />}
        <ListItemIcon sx={{ marginLeft: 2 }}>
          <Folder />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
      <Divider />
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            sublist?.map((list, index) => (
              <ListItemButton key={index} sx={{ paddingLeft: 4 }}>
                <ListItemIcon>
                  <LastPage />
                </ListItemIcon>
                <ListItemText primary={list} />
              </ListItemButton>
            ))
          }
        </List>
      </Collapse>
    </>
  )
}

const list = [
  {
    title: "Option-1",
    subMenu: ["Sub-1", "Sub-2", "Sub-3"]
  },
  {
    title: "Option-2",
    subMenu: ["Sub-1", "Sub-2", "Sub-3"]
  },
  {
    title: "Option-3",
    subMenu: ["Sub-1", "Sub-2", "Sub-3", "Sub-4"]
  },
  {
    title: "Option-4",
    subMenu: ["Sub-1", "Sub-2"]
  },
  {
    title: "Option-5",
    subMenu: ["Sub-1", "Sub-2", "Sub-3"]
  },
  {
    title: "Option-6",
    subMenu: ["Sub-1", "Sub-2", "Sub-3", "Sub-4"]
  },
  {
    title: "Option-7",
    subMenu: ["Sub-1", "Sub-2"]
  },
  {
    title: "Option-8",
    subMenu: ["Sub-1", "Sub-2", "Sub-3"]
  }
]