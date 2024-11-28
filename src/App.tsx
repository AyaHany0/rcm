import { CssBaseline } from "@mui/material";
import "./App.css";

import { CustomDirectionProvider } from "./Context/DirectionContext";
import { CustomThemeProvider } from "./Context/ThemeContext";
import { SidebarProvider } from "./Context/SideBarContext";

import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <CustomDirectionProvider>
        <CustomThemeProvider>
          <SidebarProvider>
            <CssBaseline />
            <AppRoutes />
          </SidebarProvider>
        </CustomThemeProvider>
      </CustomDirectionProvider>
    </>
  );
}

export default App;
