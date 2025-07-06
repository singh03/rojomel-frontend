import { Box, Typography } from "@mui/material";
import CustomerTable from "../components/ui/customers/Customer";

export default function ExpensesPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Customer Data</Typography>
      <CustomerTable />
    </Box>
  );
}
