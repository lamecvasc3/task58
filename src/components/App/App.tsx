import { Box, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { theme } from '../../_config/theme';
import { useStyle } from './App.style';
import "../../_assets/css/forms/mainform.scss"

import { Router } from '../Router';

export const App: React.FC = () => {
  const style = useStyle();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
        <Box className={style.app}>
          <Router />
        </Box>
    </MuiThemeProvider>      
  );
}

