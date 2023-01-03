import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import React from "react";
import { IMenuItem } from "../../types";

const MenuItemLink = ({ icon, title, route, onClick }: IMenuItem) => {

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, "to">>(
        function Link(itemProps, ref) {
          return (
            <RouterLink to={route} ref={ref} {...itemProps} role={undefined} />
          );
        }
      ),
    [route]
  );

  return (
    <ListItem button component={renderLink} onClick={onClick}>
      <ListItemIcon>{icon && icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default MenuItemLink;
