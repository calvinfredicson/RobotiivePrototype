import { forwardRef, useCallback, useState } from "react";
import {
  Box,
  Button,
  ButtonProps,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import { TableComponents, TableVirtuoso } from "react-virtuoso";
import { generateUsers } from "../../Data/tableData";
import React from "react";
import { FakeDownloadDialog } from "../../Components/Dialogs";
import {
  generateRandomNumber,
  generateRandomNumberArray,
} from "../../utilityFunctions";

const ScrollingTable: NextPage = () => {
  const usersNumber = generateRandomNumber(20, 6);
  const noHTMLIndexList = generateRandomNumberArray(5, usersNumber);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
      gap={2}
    >
      <Typography variant="h3">Mock Table Download System</Typography>
      <TableVirtuoso
        style={{ height: 400, width: 1000 }}
        data={generateUsers(usersNumber)}
        components={{
          Scroller: CustomScroller,
          Table: (props) => (
            <Table {...props} style={{ borderCollapse: "separate" }} />
          ),
          TableHead: TableHead,
          TableRow: TableRow,
          TableBody: TableBody,
        }}
        fixedHeaderContent={() => (
          <TableRow style={{ background: "blue" }}>
            <TableCell style={{ color: "white", width: 50 }}>Number</TableCell>
            <TableCell style={{ color: "white", width: 150 }}>Name</TableCell>
            <TableCell style={{ color: "white", width: 300 }}>
              Description
            </TableCell>
            <TableCell style={{ color: "white", width: 100 }}>
              Download2
            </TableCell>
            <TableCell style={{ color: "white", width: 150 }}>
              Delivered
            </TableCell>
            <TableCell style={{ color: "white" }}>Download</TableCell>
          </TableRow>
        )}
        itemContent={(index, user) => (
          <>
            <TableCell>{index + 1}</TableCell>
            <TableCell style={{ width: 150, background: "white" }}>
              {user.name}
            </TableCell>
            <TableCell style={{ background: "white" }}>
              {user.description}
            </TableCell>
            <TableCell
              style={{
                background: "white",
              }}
            >
              {noHTMLIndexList.includes(index) ? (
                <Typography sx={{ textAlign: "center" }}>0</Typography>
              ) : (
                <ClickButton text="HTML" />
              )}
            </TableCell>
            <TableCell style={{ background: "white" }}>
              {index < usersNumber - 3 ? "DELIVERED" : ""}
            </TableCell>
            <TableCell style={{ background: "white" }}>
              <ClickButton text="Download" />
            </TableCell>
          </>
        )}
      />
    </Box>
  );
};

const CustomScroller: TableComponents<any>["Scroller"] = forwardRef(
  function CustomScroller(props, ref) {
    return <TableContainer component={Paper} {...props} ref={ref} />;
  }
);

export default ScrollingTable;

interface ClickButtonProps {
  text: string;
}

const ClickButton: React.VFC<ClickButtonProps> = ({ text }) => {
  const [ancorEl, setAnchorEl] = useState(null);
  const [buttonColor, setButtonColor] =
    useState<ButtonProps["color"]>("primary");
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = useCallback(() => {
    setOpenDialog(true);
  }, []);

  const handleDialogClose = useCallback(() => {
    setOpenDialog(false);
    setButtonColor("success");
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  const handleButtonClick = useCallback((event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  }, []);
  const download = useCallback(() => {
    handleClose();
    handleOpenDialog();
  }, [handleClose, handleOpenDialog]);
  return (
    <>
      <Button
        color={buttonColor}
        variant="contained"
        onClick={handleButtonClick}
      >
        {text}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={ancorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={download}>Download</MenuItem>
        <MenuItem onClick={handleClose}>Random Item</MenuItem>
        <MenuItem onClick={handleClose}>Random Item</MenuItem>
      </Menu>
      <FakeDownloadDialog open={openDialog} handleClose={handleDialogClose} />
    </>
  );
};
