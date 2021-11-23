import React from 'react';
import { deepPurple, indigo } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Group2FormPage from './Group2FormPage';
import { Paper, Typography } from '@mui/material';

let globalTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[100],
    },
    secondary: {
      main: indigo[100],
    },
  },
  footer: {
    padding: "1.5em",
    marginTop: "auto",
    width: "100%",
    textAlign: "center"
  }
});

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Paper>
        <Group2FormPage />
        <footer id="footer" className="footer">
          <Typography variant="h6" color="secondary" style={{ textAlign: "center" }}>
          𝄆 ES𝄞YF 𝄇
          </Typography>
        </footer>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
