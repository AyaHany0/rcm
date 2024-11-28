import { useContext } from "react";
import { directionContext } from "../Context/DirectionContext";
import { Box } from "@mui/material";
import NavBar from "../Components/NavBar/NavBar";
import SideBar from "../Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { direction } = useContext(directionContext);

  return (
    <Box
      sx={{
        display: "flex",
        direction,
      }}
    >
      <NavBar />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
