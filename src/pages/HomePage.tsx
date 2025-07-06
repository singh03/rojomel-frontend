import { Box } from "@mui/material";
import IncomeExpenseForm from "../components/ui/home/IncomeExpenseForm";
import IncomeExpenseTable from "../components/ui/home/IncomeExpenseTable";

const HomePage = () => {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      {/* Table Section - Natural height based on content */}
      <Box
        sx={{
          backgroundColor: "background.paper",
          p: 3,
          flex: 1,
          paddingBottom: '120px' // Space for fixed form at bottom
        }}
      >
        <IncomeExpenseTable />
      </Box>
      
      {/* Form Section - Fixed at bottom of viewport */}
      <Box
        sx={{
          backgroundColor: "background.paper",
          p: 3,
          borderRadius: 1,
          borderColor: "primary.main",
          border: 1,
          borderTop: 2,
          borderTopColor: "primary.main",
          boxShadow: 3,
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000
        }}
      >
        <IncomeExpenseForm />
      </Box>
    </Box>
  );
};

export default HomePage;