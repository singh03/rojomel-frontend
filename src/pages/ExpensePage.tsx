import { Box, Typography } from "@mui/material";
import ExpenseTable from "../components/ui/expenses/ExpenseTable";

export default function ExpensesPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Expense Entries</Typography>
      <ExpenseTable />
    </Box>
  );
}
