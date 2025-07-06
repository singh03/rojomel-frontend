import { Box, Typography } from "@mui/material";
import IncomeTable from "../components/ui/incomes/IncomeTable";

export default function IncomePage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Income Entries</Typography>
      <IncomeTable />
    </Box>
  );
}
