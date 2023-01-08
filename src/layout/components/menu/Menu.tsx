import { Close, AltRoute, ListAltRounded, HomeRounded } from "@mui/icons-material";
import {
  Drawer, Typography, Divider, List, IconButton, styled, Box, useMediaQuery
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CollapseMenuItem from "./CollapseMenuItem";
import { DRAWER_WIDTH } from "../../constants";
import { IMenuItem } from "../../types";
import MenuItemLink from "./MenuItemLink";
import { useTheme } from '@mui/material/styles';

const menuItems: IMenuItem[] = [
  { title: "Přehled", icon: <HomeRounded />, route: "/" },
//   { title: "Výhybky", icon: <AltRoute />, route: "/vyhybky" },
//   { title: "Záznamy událostí", icon: <ListAltRounded />, route: "zaznamy" },
];
const collapseMenuItems: IMenuItem[] = [
//   { title: "Import dat", route: "/import" },
//   { title: "Parametry měření", route: "/parametry" },

];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Menu = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: Function;
}) => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    setOpenMenu(isLg);
  },[isLg])

  return (
    <Drawer
      anchor="left"
      open={openMenu}
      variant={!isLg ? "temporary" : "permanent"}
      onClose={() => setOpenMenu(false)}
    >
      <DrawerHeader>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 74,
            width: "100%",
          }}
        >
          <Typography variant="h6" sx={{}}>
            SmartView
          </Typography>
        </Box>

        <IconButton
          onClick={() => setOpenMenu(false)}
          sx={{ display: { lg: "none" } }}
        >
          <Close />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List style={{ width: DRAWER_WIDTH }}>
        {menuItems.map((item, id) => (
          <MenuItemLink
            key={id}
            route={item.route}
            title={item.title}
            icon={item.icon}
            onClick={() => setOpenMenu(false)}
          />
        ))}
        <CollapseMenuItem
          primary={"Nastavení"}
          items={collapseMenuItems}
          onClick={() => setOpenMenu(false)}
        />
      </List>
    </Drawer>
  );
};

export default Menu;
