import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
  path: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  isOpen,
  path,
}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(path);
  };

  const item = (
    <ListItem
      disablePadding
      sx={{ display: "block" }}
      onClick={handleNavigation}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: isOpen ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: isOpen ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{
            opacity: isOpen ? 1 : 0,
            transition: (theme) => theme.transitions.create("opacity"),
          }}
        />
      </ListItemButton>
    </ListItem>
  );

  return isOpen ? (
    item
  ) : (
    <Tooltip title={text} placement="right">
      {item}
    </Tooltip>
  );
};
