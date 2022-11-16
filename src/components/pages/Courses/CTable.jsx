import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { Button, Divider, TableHead } from "@mui/material";
import { Link } from "react-router-dom";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const mainRow = [
  {
    Faculaty: "bca",
    TotalSem: "1",
    Fee: "20000",
    TotalSubjets: "5",
  },
  {
    Faculaty: "bsc",
    TotalSem: "1",
    Fee: "20000",
    TotalSubjets: "5",
  },
  {
    Faculaty: "bcom",
    TotalSem: "1",
    Fee: "20000",
    TotalSubjets: "5",
  },
  {
    Faculaty: "ba",
    TotalSem: "1",
    Fee: "20000",
    TotalSubjets: "5",
  },
  {
    Faculaty: "bca",
    TotalSem: "1",
    Fee: "20000",
    TotalSubjets: "5",
  },
  {
    Faculaty: "bsc",
    TotalSem: "1",
    Fee: "20000",
    TotalSubjets: "5",
  },
  {
    Faculaty: "bcom",
    TotalSem: "1",
    Fee: "20000",
    TotalSubjets: "5",
  },
  {
    Faculaty: "ba",
    TotalSem: "1",
    Fee: "20000",
    TotalSubjets: "5",
  },
  {
    Faculaty: "bca",
    TotalSem: "1",
    Fee: "20000",
    TotalSubjets: "5",
  },
  {
    Faculaty: "bsc",
    TotalSem: "1",
    Fee: "20000",
    TotalSubjets: "5",
  },
  {
    Faculaty: "bcom",
    TotalSem: "1",
    Fee: "20000",
    TotalSubjets: "5",
  },
  {
    Faculaty: "ba",
    TotalSem: "1",
    Fee: "20000",
    TotalSubjets: "5",
  },
  {
    Faculaty: "bca",
    TotalSem: "1",
    Fee: "20000",
    TotalSubjets: "5",
  },
  {
    Faculaty: "bsc",
    TotalSem: "1",
    Fee: "20000",
    TotalSubjets: "5",
  },
  {
    Faculaty: "bcom",
    TotalSem: "1",
    Fee: "20000",
    TotalSubjets: "5",
  },
  {
    Faculaty: "ba",
    TotalSem: "1",
    Fee: "20000",
    TotalSubjets: "5",
  },
];

export default function CTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - mainRow.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <StyledTableCell component="th">Faculaty</StyledTableCell>
          <StyledTableCell align="center">TotalSem</StyledTableCell>
          <StyledTableCell align="center">Fee</StyledTableCell>
          <StyledTableCell align="right">TotalSubjets</StyledTableCell>
          <StyledTableCell align="right">Subject</StyledTableCell>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? mainRow.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : mainRow
          ).map((row, index) => (
            <StyledTableRow key={index}>
              <TableCell scope="row">{row.Faculaty}</TableCell>
              <TableCell align="center">{row.TotalSem}</TableCell>
              <TableCell align="center">{row.Fee}</TableCell>
              <TableCell align="right">{row.TotalSubjets}</TableCell>
              <TableCell align="right">
                <Link to="/about">
                  <Button variant={"contained"}> Go Now </Button>{" "}
                </Link>
              </TableCell>
            </StyledTableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={mainRow.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}