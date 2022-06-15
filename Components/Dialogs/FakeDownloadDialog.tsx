import { useCallback, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface FakeDownloadDialogProps {
  open: boolean;
  handleClose: () => void;
}

export const FakeDownloadDialog: React.VFC<FakeDownloadDialogProps> = ({
  open,
  handleClose,
}) => {
  const [path, setPath] = useState("");

  const onPathChange = useCallback((e) => {
    setPath(e.target.value);
  }, []);

  const validatePath = useCallback(() => {
    if (!path.length) return;
    handleClose();
  }, [handleClose, path]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{ "& .MuiDialog-paper": { width: "80%" } }}
    >
      <DialogTitle>Download Window</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter Save Directory</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="path"
          label="Download Path"
          type="email"
          value={path}
          onChange={onPathChange}
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={validatePath}>Download</Button>
      </DialogActions>
    </Dialog>
  );
};
