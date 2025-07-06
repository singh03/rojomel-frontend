import { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";
import { fetchIncomeExpensePage } from "../../../api/incomeExpenseApi";
import { IncomeExpenseRow } from "../../../types/incomeExpense";

export default function IncomeExpenseTable() {
  const [rows, setRows] = useState<IncomeExpenseRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetchIncomeExpensePage(page - 1, 10);
        setRows(response.content);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [page]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    navigate(`/finance/allFinanceEntry?page=${value}`);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box px={3} py={2}>
      <TableContainer component={Paper} sx={{ maxHeight: "60vh", overflow: "auto" }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow sx={{ backgroundColor: "primary.dark" }}>
              <TableCell>
                <Typography variant="subtitle1" fontWeight="bold">Customer</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">Income</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">Expense</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">Balance</Typography>
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 180 }}>
                <Typography variant="subtitle1" fontWeight="bold">Date Time</Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={idx} hover>
                <TableCell>{row.userName}</TableCell>
                <TableCell align="right" sx={{ color: "success.main" }}>
                  {row.income.toLocaleString()}
                </TableCell>
                <TableCell align="right" sx={{ color: "error.main" }}>
                  {row.expense.toLocaleString()}
                </TableCell>
                <TableCell align="right" sx={{ color: row.balance > 0 ? 'success.main' : 'error.main' }}>
                  {row.balance.toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {new Date(row.dateCreated).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={3} display="flex" justifyContent="center">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
}
