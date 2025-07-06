// ExpenseTable.tsx
import {
  Box, CircularProgress, Pagination, Paper,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { fetchIncomeExpensePage } from "../../../api/incomeExpenseApi"; // You'll implement this
import { IncomeExpenseRow } from "../../../types/incomeExpense";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function ExpenseTable() {
  const [rows, setRows] = useState<IncomeExpenseRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetchIncomeExpensePage(page - 1, 10, 'EXPENSE'); // filter from backend
        setRows(response.content);
        setTotalPages(response.totalPages);
      } catch (err) {
        console.error("Error loading expenses", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [page]);

  const handlePageChange = (_: any, value: number) => {
    navigate(`/expenses?page=${value}`);
  };

  if (loading) return <Box display="flex" justifyContent="center" height="50vh"><CircularProgress /></Box>;

  return (
    <Box px={3} py={2}>
      <TableContainer component={Paper} sx={{ maxHeight: "60vh" }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell><b>Customer</b></TableCell>
              <TableCell align="right"><b>Expense</b></TableCell>
              <TableCell align="right"><b>Date Time</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.userName}</TableCell>
                <TableCell align="right" sx={{ color: 'error.main' }}>
                  {row.expense.toLocaleString()}
                </TableCell>
                <TableCell align="right">{new Date(row.dateCreated).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={3} display="flex" justifyContent="center">
        <Pagination count={totalPages} page={page} onChange={handlePageChange} />
      </Box>
    </Box>
  );
}
