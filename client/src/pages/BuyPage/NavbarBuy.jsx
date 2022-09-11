import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import DrawerBuy from "./DrawerBuy";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const NavbarBuy = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <MonitorHeartIcon onClick={()=>{navigate('/')}} sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography className="mediaq-logo" sx={{ fontSize: "2rem", paddingLeft: "4%" }}>
                MEDKIT
              </Typography>
              <DrawerBuy />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Find A Doctor" />
                <Tab label="Find A Hospital" onClick={()=>{navigate('/findhospital')}} />
                <Tab label="Help & FAQs" />
                <Tab label="Contact US" />
              </Tabs>

              <Button sx={{ marginLeft: "auto" }} variant="contained" onClick={()=>{navigate('/login')}}>
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained" onClick={()=>{navigate('/register')}}>
                SignUp
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained" onClick={()=>{navigate('/checkout')}}>
              <ShoppingCartIcon style={{}}/>

              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavbarBuy;