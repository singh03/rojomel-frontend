// IncomeExpenseForm.tsx
import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Box
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import SelectCustomer from "./SelectCustomer";
import { CustomerOptionType } from "../../../types/customerOption";
import { createFinanceEntry } from "../../../api/incomeExpenseApi";
import { FinanceDto } from "../../../types/finance";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


const IncomeExpenseForm: React.FC = () => {
  const [dateTime, setDateTime] = useState<Dayjs | null>(dayjs());
  const [customer, setCustomer] = useState<CustomerOptionType | null>(null);
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateForm = (): string[] => {
    const errors: string[] = [];
    if (!customer) errors.push("Customer is required.");
    if (!income && !expense) errors.push("Enter income or expense.");
    if (income && (isNaN(Number(income)) || Number(income) < 0)) {
      errors.push("Income must be a positive number.");
    }
    if (expense && (isNaN(Number(expense)) || Number(expense) < 0)) {
      errors.push("Expense must be a positive number.");
    }
    return errors;
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (validationErrors.length) {
      setError(validationErrors.join(", "));
      setSuccess("Finance entry created!");
      return;
    }

    setSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const financeDto: FinanceDto = {
      userId: customer?.id === -1 ? undefined : customer?.id,
      userName: customer?.name,
      income: income ? Number(income) : 0, 
      expense: expense ? Number(expense) : 0, 
      dateCreated: dateTime?.toDate() ?? new Date(),
    };


      await createFinanceEntry(financeDto);
      setSuccess("Finance entry created!");
      setCustomer(null);
      setIncome("");
      setExpense("");
      setDateTime(dayjs());

      // Optional: short delay before reload to let success message show
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.error("Failed to submit:", err);
      setError("Submission failed.");
    } finally {
      setSubmitting(false);
    }
  };

return (
  <Box sx={{ p: 3 }}>
    {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
    {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={2.4}>
          <SelectCustomer value={customer} onChange={setCustomer} />
        </Grid>
        <Grid item xs={12} sm={2.4}>
          <TextField
            label="Income"
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            fullWidth
            placeholder="0.00"
            color="success"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={2.4}>
          <TextField
            label="Expense"
            type="number"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            fullWidth
            placeholder="0.00"
            color="error"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={2.4}>
          <DateTimePicker
            label="Date Time"
            value={dateTime}
            onChange={(newVal) => setDateTime(newVal)}
            slotProps={{ textField: { size: "small", fullWidth: true } }}
          />
        </Grid>
        <Grid item xs={12} sm={2.4}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={submitting}
            fullWidth
            sx={{ height: 40 }}
          >
            {submitting ? (
              <>
                <CircularProgress size={16} sx={{ mr: 1 }} />
                Creating...
              </>
            ) : (
              "CREATE"
            )}
          </Button>
        </Grid>
      </Grid>
    </LocalizationProvider>
  </Box>
);
};

export default IncomeExpenseForm;
