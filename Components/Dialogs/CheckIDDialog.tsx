import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Paper, PaperProps, TextField, Typography, useTheme } from '@mui/material'
import React, { Dispatch, FormEvent, useCallback, useState } from 'react'
import Draggable from 'react-draggable'
import { DialogCheckerDataType } from '../../pages/SAP'

const PaperComponent = (props: PaperProps) => {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  )
}

interface CheckDialogProps {
  open: boolean,
  stateSetter: Dispatch<React.SetStateAction<boolean>>
  info?: string,
  data: Dispatch<React.SetStateAction<DialogCheckerDataType | null>>
}

export const CheckIDDialog: React.VFC<CheckDialogProps> = ({ open, stateSetter, data }) => {
  const theme = useTheme()
  const [id, setId] = useState<string | null>(null)
  const [date, setDate] = useState<string | null>(null)
  const handleClose = useCallback(() => {
    stateSetter(false)
    if (!id || !date) return
    data({
      id: id,
      date: date
    })
    setId(null)
    setDate(null)
  }, [id, date])
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperComponent={PaperComponent}
    >
      <DialogTitle style={{ cursor: 'move', margin: theme.spacing(2, 'auto') }}>ID Check Dialog</DialogTitle>
      <Divider />
      <Box component={DialogContent} display="grid" gridTemplateColumns="1fr 3fr" alignItems="center" gap={2}>
        <Typography>IDs</Typography>
        <TextField required type="text" variant="outlined" placeholder="Enter Invoice ID" value={id} onChange={(e) => setId(e.target.value)} />
        <Typography>Date</Typography>
        <TextField required type="date" variant="outlined" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
      </Box>
      <Divider />
      <DialogActions sx={{ paddingTop: 2 }}>
        <Button variant="text" color="primary" onClick={handleClose} sx={{ marginRight: 2, marginBottom: 1 }}>Confirm</Button>
      </DialogActions>
    </Dialog>
  )
}

