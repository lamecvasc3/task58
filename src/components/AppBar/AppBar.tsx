import React from "react";
import { AppBar as MuiAppBar, Box, Toolbar } from "@material-ui/core";
import companyLogo from "../../_assets/img/logo.svg";

import { useStyles } from "./AppBar.style";

interface AppBarProps {
  action?: React.ReactNode;
}

export const AppBar:React.FC<AppBarProps> = ({ action }: AppBarProps) => {
  const style = useStyles();

  return (
    <MuiAppBar color="primary" position="relative">
      <Toolbar className={style.toolbar}>
        <Box className={style.logo}>
          <img src={companyLogo} alt="logo" />
        </Box>
        {action}
      </Toolbar>
    </MuiAppBar>
  );
};