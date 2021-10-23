import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, PaperProps, Typography } from "@mui/material"
import { Dispatch, SetStateAction, useCallback } from "react"
import Draggable from "react-draggable"

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

interface BasicInfoDialogProps {
  open: boolean,
  stateSetter: Dispatch<SetStateAction<boolean>>,
  info: string
}

export const BasicInfoDialog: React.VFC<BasicInfoDialogProps> = ({ open, stateSetter, info }) => {
  const handleClose = useCallback(() => {
    stateSetter(false)
  }, [])

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        Information
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {info}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="text" color="primary" onClick={handleClose} sx={{ marginRight: 2, marginBottom: 1 }}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

