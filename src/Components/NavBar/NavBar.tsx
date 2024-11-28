import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import { useContext } from "react";

import { directionContext } from "../../Context/DirectionContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { useThemeContext } from "../../Hooks/useThemeContext";
import { useSidebar } from "../../Context/SideBarContext";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const NavBar = () => {
  const { toggleTheme, mode } = useThemeContext();
  const { setDirectionLTR, setDirectionRTL, direction } =
    useContext(directionContext);
  const { toggleSidebar } = useSidebar();

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2 }}
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to={"/"}
            sx={{
              marginRight: 2,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            RCM
          </Typography>
          <Button
            variant={direction === "ltr" ? "outlined" : "contained"}
            onClick={setDirectionLTR}
            sx={{
              marginX: 1,
              backgroundColor: direction === "ltr" ? "primary.main" : "inherit",
              color: "Background",
              borderColor: "Background",
            }}
          >
            LTR
          </Button>
          <Button
            variant={direction === "rtl" ? "outlined" : "contained"}
            onClick={setDirectionRTL}
            sx={{
              backgroundColor: direction === "rtl" ? "primary.main" : "inherit",
              color: "Background",
              borderColor: "Background",
            }}
          >
            RTL
          </Button>
        </Box>
        <IconButton
          color="inherit"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {mode === "light" ? <BedtimeIcon /> : <LightModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
