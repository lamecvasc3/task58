import { makeStyles } from "@material-ui/core";
import { theme } from "_config/theme"

const toolbarHeight = "8.5vh";

export const useStyles = makeStyles({
  toolbar: {
    minHeight: "48px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: toolbarHeight,

    [theme.breakpoints.down("sm")]: {
      height: toolbarHeight,
    },
  },
  cancelButton: {
    marginLeft: "16px",
  },
  logo: {
    height: "100%",
    width: "80px",
    borderRadius: "0px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
});