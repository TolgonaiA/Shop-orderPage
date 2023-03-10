import './App.css';
import { useState } from 'react';
import Navigation from "./containers/Navigation/Navigation";
import SearchBar from "./containers/SearchBar/SearchBar";
import Order from "./containers/Order/Order";
import SFProDisplay from './fonts/SFProDisplay.ttf'
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import Footer from "./containers/Footer/Footer";
import Pen from './assets/pen.png';
import USB from './assets/usb.png';
import Pens from './assets/pens.png';



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
  const [data, setData] = useState([
    {
      id: 1,
      img: Pen,
      name: 'Pen',
      art: 'L434-GH43',
      count: 1,
      price: 420,
    },
    {
      id: 2,
      img: USB,
      name: 'USB',
      art: 'L434-GH43',
      count: 1,
      price: 420,
    },
    {
      id: 3,
      img: Pens,
      name: 'Pens',
      art: 'L434-GH43',
      count: 1,
      price: 10000,
      prevPrice: 11000
    },
  ])

  const countDown = (id) => {
    let newData = [...data]
    let el = newData.find(el=> el.id === id);
    if (el.count !== 0) {
      el.count = el.count - 1;
    } 
    setData(newData);
  }

  const countUp = (id) => {
    let newData = [...data]
    let el = newData.find(el=> el.id === id);
    el.count = el.count + 1;
    setData(newData);
  }

  const deleteHandler = (id) => {
    setData(data.filter(el => el.id !== id));
  }

  const searchHandler = (event) => {
    let val = event.target.value.toLowerCase();
    const match = data.filter(el => {
      const result = el.name.toLowerCase().includes(val)
      return result
    })
    if (val.length < 2) {
      setData([
        {
          id: 1,
          img: Pen,
          name: 'Pen',
          art: 'L434-GH43',
          count: 1,
          price: 420,
        },
        {
          id: 2,
          img: USB,
          name: 'USB',
          art: 'L434-GH43',
          count: 1,
          price: 420,
        },
        {
          id: 3,
          img: Pens,
          name: 'Pens',
          art: 'L434-GH43',
          count: 1,
          price: 10000,
          prevPrice: 11000
        },
      ])
    } else {
      setData(match);
    }
    
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navigation/>
        <SearchBar 
          data={data}
          searchHandler={searchHandler}
        />
        <Order
          data={data}
          countDown={countDown}
          countUp={countUp}
          deleteHandler={deleteHandler}
        ></Order>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;









