import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Paper, PaperProps, TextField, Typography, useTheme } from '@mui/material'
import React, { Dispatch, useCallback } from 'react'
import Draggable from 'react-draggable'

const PaperComponent = (props: PaperProps) => {
  return (
    <Draggable>
      <Paper {...props} />
    </Draggable>
  )
}

interface CheckDialogProps {
  open: boolean,
  stateSetter: Dispatch<React.SetStateAction<boolean>>
  info?: string,
  exportData: Dispatch<React.SetStateAction<boolean>>
}

export const ConfirmDialog: React.VFC<CheckDialogProps> = ({ open, stateSetter, exportData }) => {
  const handleOK = useCallback(() => {
    stateSetter(false)
    exportData(true)
  }, [])

  const handleCancel = useCallback(() => {
    stateSetter(false)
    exportData(false)
  }, [])

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      PaperComponent={PaperComponent}
    >
      <Box component={DialogContent} display="grid" gridTemplateColumns="1fr 3fr" alignItems="center" gap={2}>
        <Typography variant="body1">Are you sure ?</Typography>
      </Box>
      <DialogActions>
        <Button type="submit" variant="contained" color="primary" onClick={handleOK} sx={{ marginBottom: 1 }}>Ok</Button>
        <Button type="submit" variant="outlined" color="primary" onClick={handleCancel} sx={{ marginRight: 2, marginBottom: 1 }}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

