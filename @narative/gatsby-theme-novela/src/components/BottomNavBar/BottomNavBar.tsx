import React, {  } from "react";
import { navigateTo } from "gatsby";
import { useColorMode } from "theme-ui";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import mediaqueries from "@styles/media";
import styled from "@emotion/styled";

const themeLocal = createMuiTheme({
  palette: {
    primary: {
      main: '#ff9900'
    }
  }
});

export default function SimpleBottomNavigation() {
  const [colorMode] = useColorMode();
  const fill = colorMode === "dark" ? "#111216" : "#fff";
  const iconFill = colorMode === "dark" ?  "#fff": "#111216";
  const useStyles = makeStyles({
    root: {
      background: fill,
      borderRadius: 3,
      border: 0,
      height: 48,
      width: '100%',
      position: 'fixed',
      zIndex: 100,
      bottom: 0,
      // padding: '0 30px',
    },
    wrapper: {
      color: iconFill,
      '&$selected': {
        color: '#ff9900',
      },
      fontSize: '0.9rem',
      marginBottom: 'auto',
      marginTop: 'auto',
    },
    label: {
      fontSize: '0.9rem',
      marginBottom: 'auto',
      marginTop: 'auto',
      color: iconFill
    },
    selected: {
      color: '#ff9900'
    }
  });
  const classes = useStyles();
  let x: number = parseInt(localStorage.getItem('bottomNav'));
  console.log('localstorage', x);
  x = isNaN(x) ? 0 : x;
  console.log('now is ', x);
  const [value, setValue] = React.useState(x);
  return (
    <MuiThemeProvider theme={themeLocal}>
      <BottomNavStyle>
      <BottomNavigation 
      value={value}
      onChange={(event, newValue) => {
        console.log(value, event, newValue);
        setValue(newValue);
        localStorage.setItem('bottomNav', newValue);
        event.preventDefault()
        switch(newValue){
          case 0:
            console.log(0);
            navigateTo("/");
            break;
          case 1:
            console.log(1);
           navigateTo("/about-me");
            break;
          case 2:
            console.log(2);
            navigateTo("/category/gatsby");
            break;
          case 3:
            console.log(3);
           navigateTo("/category/gatsby");
            break;
        };
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="HOME" icon={<HomeRoundedIcon/>} className={classes.wrapper}/>
      <BottomNavigationAction label="ABOUT ME" icon={<AccountCircleRoundedIcon/>} className={classes.wrapper}/>
      <BottomNavigationAction label="PROGRAMMING" icon={<CodeRoundedIcon/>} className={classes.wrapper}/>
      <BottomNavigationAction label="STORIES" icon={<MenuBookRoundedIcon/>} className={classes.wrapper}/>
    </BottomNavigation>
      </BottomNavStyle>

  </MuiThemeProvider>

  );
}


const BottomNavStyle = styled.div`
  display: none;
  ${mediaqueries.phablet`
    display: block;
  `}
  }
`;