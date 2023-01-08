import {
    Paper, AppBar, Toolbar, IconButton, Typography, Button, Box, useMediaQuery
  } from "@mui/material";
  import { AccountCircle, BorderBottom, Menu as MenuIcon } from "@mui/icons-material";
  import React, { useEffect, useState } from "react";
  import Menu from "./menu/Menu";
  import { DRAWER_WIDTH } from "../constants";
  import { useSelector } from "react-redux";
  import { GlobalState } from "../../global";
  import { Link } from "react-router-dom";
  import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
  import { useTheme } from '@mui/material/styles';
  import { Styled } from "../../style/global";
  
  const Layout = ({ children }: { children: React.ReactNode }) => {
    const theme = useTheme();
    const [openMenu, setOpenMenu] = useState(false);
    const page = useSelector((state: GlobalState) => state.page);
    const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  
    return (
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
  
        <Box
          sx={{
            width: { sm: "100%", lg: `calc(100% - ${DRAWER_WIDTH})` },
            marginLeft: { lg: "auto" },
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Box
            style={{
              minHeight: "100vh",
            }}
          >
            <AppBar
              position="sticky"
              elevation={0}
              sx={{ backgroundColor: theme.palette.background.paper }}
            >
  
              <Box
                sx={{
                  ...Styled.position.left,
                  padding: "0.5em 1em",
                  backgroundColor: theme.palette.secondary.main
                }}
              >
                <IconButton
                  onClick={() => setOpenMenu(true)}
                  color="inherit"
                  sx={{
                    fontSize: "1em",
                    display: { lg: "none" },
                    padding: "0 1em 0 0"
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Box
                  sx={Styled.position.centerColumn}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      lineHeight: 1,
                    }}
                  >
                    {page.name}
                  </Typography>
  
                </Box>
  
                <Typography
                  variant="h6"
                  sx={{ marginLeft: "auto", padding: 0 }}
                >
                  eXperience
                </Typography>
  
              </Box>
  
              <Box
                sx={{
                  backgroundColor: theme.palette.background.default,
                  color: theme.palette.text.primary
                }}>
                <Box sx={{
                  ...Styled.position.left,
                  padding: "0.25em 1em",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
                }}>
  
                  <Box sx={{...Styled.position.centeredRow}}>
                    <IconButton
                      to="/"
                      component={Link}
                    >
                      <HomeRoundedIcon />
                    </IconButton>
  
                    {page.tree.map((item, i) => {
                      return (
                        <div
                          style={{ display: "flex", }}
                          key={`tree_${i}`}>
                          <Typography
                            sx={{ padding: "0 1em" }}
                          >
                            /
                          </Typography>
                          <Button
                            component={Link}
                            to={i !== page.tree.length - 1 ? item.path : ""}
                            disabled={i !== page.tree.length - 1 ? false : true}
                            variant="text"
                            key={i}
                            sx={{ padding: 0, color: theme.palette.text.primary }}
                          >
                            {item.name}
                          </Button>
                        </div>
                      )
                    }
                    )}
                  </Box>
  
                  <Button
                    variant="text"
                    sx={{ marginLeft: "auto", padding: 0, color: theme.palette.text.primary }}
                  >
                    <AccountCircle />
  
                    {!isSmDown &&
                      <Typography
                        variant="caption"
                        sx={{ paddingLeft: "0.5rem" }}
                      >
                        SuperAdmin
                      </Typography>}
  
                  </Button>
  
                </Box>
  
              </Box>
  
            </AppBar>
            <Box
            >
              {children}
            </Box>
  
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Layout;
  