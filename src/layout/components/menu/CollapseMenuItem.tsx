import { Settings, ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  ListItemIcon, ListItemText, Collapse, List, ListItemButton,
} from "@mui/material";
import React, { useState } from "react";
import { IMenuItem } from "../../types";
import MenuItemLink from "./MenuItemLink";

const CollapseMenuItem = (
  { primary, items, onClick }: { primary: string; items: IMenuItem[]; onClick: () => void }
) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  return (
    <>
      <ListItemButton onClick={() => setOpenSubMenu(!openSubMenu)}>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary={primary} />
        {openSubMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSubMenu}>
        <List>
          {items.map((item, id) => (
            <MenuItemLink
              key={id}
              route={item.route}
              title={item.title}
              icon={item.icon}
              onClick={onClick}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default CollapseMenuItem;
