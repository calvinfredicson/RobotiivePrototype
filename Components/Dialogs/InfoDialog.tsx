import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, PaperProps, Typography } from "@mui/material"
import { Dispatch, SetStateAction, useCallback } from "react"
import Draggable from "react-draggable"
import { Account } from "../../Data/loginInfo"

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

interface InfoDialogProps {
  open: boolean,
  stateSetter: Dispatch<SetStateAction<boolean>>
}

export const InfoDialog: React.VFC<InfoDialogProps> = ({ open, stateSetter }) => {
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
        Scenario Information
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Case: This login page will take approximately 5s to process login. If it does not log you in 5s, please login again.
        </DialogContentText>
        {
          Object.entries(Account).map(([key, value], index) => (
            <Chip color="info" key={index} label={`${key}: ${value}`} sx={{ marginRight: 2, marginTop: 2 }} />
          ))
        }
      </DialogContent>
      <DialogActions>
        <Button variant="text" color="primary" onClick={handleClose} sx={{ marginRight: 2, marginBottom: 1 }}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

