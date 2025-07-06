// SelectCustomer.tsx
import React, { useState, useEffect } from "react";
import {
  Autocomplete,
  TextField,
  CircularProgress,
  Typography,
  Box
} from "@mui/material";
import { CustomerOptionType } from "../../../types/customerOption";
import { fetchCustomerDetailsPage } from "../../../api/customerApi";
import _ from "lodash";

const SelectCustomer: React.FC<{
  value: CustomerOptionType | null;
  onChange: (value: CustomerOptionType | null) => void;
}> = ({ value, onChange }) => {
  const [customers, setCustomers] = useState<CustomerOptionType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCustomers() {
      try {
        const response = await fetchCustomerDetailsPage(0, 1000);
        const customerOptions = response.content.map((customer: any) => ({
          id: customer.id,
          name: customer.name,
        }));
        setCustomers(customerOptions);
      } catch (error) {
        console.error("Failed to fetch customers:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCustomers();
  }, []);

  if (loading) {
    return (
      <Box display="flex" alignItems="center">
        <CircularProgress size={20} />
        <Typography sx={{ ml: 1 }}>Loading customers...</Typography>
      </Box>
    );
  }

  return (
    <Autocomplete
      value={value}
      onChange={(_e, newValue) => onChange(newValue)}
      options={customers}
      getOptionLabel={(option) => (typeof option === "string" ? option : option.name)}
      renderInput={(params) => <TextField {...params} label="Customer" size="small" required />}
      sx={{ width: "100%" }}
    />
  );
};

export default SelectCustomer;
