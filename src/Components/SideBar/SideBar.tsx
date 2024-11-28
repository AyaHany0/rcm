import React from "react";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import { useTheme } from "@mui/material/styles";
import { Box, Drawer, List } from "@mui/material";
import { useSidebar } from "../../Context/SideBarContext";
import { directionContext } from "../../Context/DirectionContext";
import { SidebarItem } from "../SideBarItem/SideBarItem";

export default function SideBar() {
  const DRAWER_WIDTH = 240;
  const COLLAPSED_WIDTH = 65;

  const MENU_ITEMS = React.useMemo(
    () => [
      {
        id: "checkEligibility",
        text: "Check eligibility",
        icon: <CheckCircleOutlineSharpIcon />,
      },
    ],
    []
  );

  const { isOpen } = useSidebar();
  const { direction } = React.useContext(directionContext); // Consume direction from context
  const theme = useTheme();

  const styles = {
    drawer: {
      width: isOpen ? DRAWER_WIDTH : COLLAPSED_WIDTH,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    paper: {
      width: isOpen ? DRAWER_WIDTH : COLLAPSED_WIDTH,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: "hidden",
      backgroundColor: theme.palette.background.default,
      borderRight:
        direction === "ltr" ? `1px solid ${theme.palette.divider}` : "none",
      borderLeft:
        direction === "rtl" ? `1px solid ${theme.palette.divider}` : "none",
    },
  };
  return (
    <Drawer
      variant="permanent"
      anchor={direction === "rtl" ? "right" : "left"}
      aria-label="Sidebar navigation"
      sx={{
        ...styles.drawer,
        "& .MuiDrawer-paper": styles.paper,
      }}
    >
      <Box sx={{ overflow: "hidden", mt: 8 }} dir={direction}>
        <List>
          {MENU_ITEMS.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              text={item.text}
              isOpen={isOpen}
              path={item.id}
            />
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
