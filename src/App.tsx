// App.tsx
import { Route, Routes } from "react-router-dom";
import "./App.sass";
import { useState } from "react";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import CustomerPage from "./pages/CustomerPage";
import ExpensesPage from "./pages/ExpensePage";
import IncomePage from "./pages/IncomePage"
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./theme";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            }
          >
            <Route index element={<HomePage />} />
            <Route path="finance/allFinanceEntry" element={<HomePage />} />
            <Route path="customers" element={<CustomerPage />} />
            <Route path="expenses" element={<ExpensesPage />} />
            <Route path="income" element={<IncomePage />} />
          </Route>
        </Routes>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
