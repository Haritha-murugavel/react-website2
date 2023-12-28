
import { Mail, Notifications, Pets, TurnLeftRounded } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import ChaletIcon from "@mui/icons-material/Chalet";
import MailIcon from "@mui/icons-material/Mail";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const SearchBarField = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "5px 20px",
  borderRadius: "10px",
  width: "40%",

}));
const IconsBarField = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

const IconsBarMiniField =  styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
}));



const Navbar = () => {
    const [open,setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Tour Cafe
        </Typography>
        <ChaletIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBarField>
          <InputBase placeholder="Search...." />
        </SearchBarField>
        <IconsBarField>
          <Badge badgeContent={8} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{width:"30px", height:"30px"}} onClick={e => setOpen(true)}  />
        </IconsBarField>
        <IconsBarMiniField>
        <Avatar sx={{width:"30px", height:"30px"}} onClick={e => setOpen(true)}/>
        </IconsBarMiniField>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;




