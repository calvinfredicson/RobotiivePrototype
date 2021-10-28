import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { styled, useTheme } from '@mui/material'
import { FinanceData } from '../../Data/sapData'

interface CustomTableProps {
  data: FinanceData["data"]
}

export const CustomTable: React.VFC<CustomTableProps> = ({ data }) => {
  const theme = useTheme()
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ backgroundColor: theme.palette.primary.main }}>
          <TableRow>
            <TableHeaderRow align="center">Long Term Debt</TableHeaderRow>
            <TableHeaderRow align="center">Total Asset</TableHeaderRow>
            <TableHeaderRow align="center">Total Liabilities</TableHeaderRow>
            <TableHeaderRow align="center">Total Equity</TableHeaderRow>
            <TableHeaderRow align="center">YTD ( in millions USD )</TableHeaderRow>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map(row => (
              <>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">{row.q1}</TableCell>
                  <TableCell align="center">{row.q2}</TableCell>
                  <TableCell align="center">{row.q3}</TableCell>
                  <TableCell align="center">{row.q4}</TableCell>
                  <TableCell align="center">{row.ytd}</TableCell>
                </TableRow>
              </>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const TableHeaderRow = styled(TableCell, { name: 'HeaderRow' })(() => ({
  color: 'white'
}))