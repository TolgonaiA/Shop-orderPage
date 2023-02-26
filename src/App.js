import './App.css';
import Navigation from "./containers/Navigation/Navigation";
import SearchBar from "./containers/SearchBar/SearchBar";
import Order from "./containers/Order/Order";
import SFProDisplay from './fonts/SFProDisplay.ttf'
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";


const theme = createTheme({
  typography: {
    fontFamily: 'SFProDisplay',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'SFProDisplay';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('SFProDisplay'), local('SFProDisplay'), url(${SFProDisplay}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },

});



const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navigation/>
        <SearchBar></SearchBar>
        <Order></Order>
      </ThemeProvider>
    </>
  );
}

export default App;









