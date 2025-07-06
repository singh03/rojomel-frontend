import { Box } from "@mui/material";
import Header from "./components/ui/Header";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Layout = (props: LayoutProps) => {
  return (
    <Box sx={{ minHeight: "100%", backgroundColor: "background.default", color: "text.primary" }}>
      <Header
        toggleDarkMode={props.toggleDarkMode}
        isDarkMode={props.isDarkMode}
      />
      <Outlet />
    </Box>
  );
};

export default Layout;
