import React from 'react'
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography, Box, Button, Menu, MenuItem } from "@mui/material"

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';


const useStyles = makeStyles((theme) => ({

    root: {
        height: "80px",
       
        width: "100%",
        marginTop: "80px",
        position: "sticky",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        "& .detailsBox": {
            width: "80%",
            height: "80%",
           backgroundColor: "#F5F5F5",
            display: "flex",
            justifyContent: "space-around",
            alignItems:"center",
        }
        
    }
    
}))

function AdminHeader ()
{
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
         setAnchorEl(event.currentTarget);
     };
    const handleClose = () => {
        setAnchorEl(null);
        
    };


    const classes = useStyles()
  return (
      <Box className={classes.root}> 
          <Box className="detailsBox">
              
              <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
                  >
                      <div style={{ display: "flex" }}> <HomeIcon style={{fontSize:"20px"}} /><Typography>Dashboard</Typography> <KeyboardArrowDownIcon style={{fontSize:"20px"}}/> </div>
      
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Current Shop</MenuItem>
        <MenuItem onClick={handleClose}>Weather App</MenuItem>
        <MenuItem onClick={handleClose}>All Staff</MenuItem>
      </Menu>
    </div>
              <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
<div style={{ display: "flex" }}> <BookmarkBorderIcon style={{fontSize:"20px"}} /><Typography>Recent Order</Typography> <KeyboardArrowDownIcon style={{fontSize:"20px"}}/> </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
              <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <div style={{ display: "flex" }}> <DensitySmallIcon style={{fontSize:"20px"}} /><Typography>All Order</Typography> <KeyboardArrowDownIcon style={{fontSize:"20px"}}/> </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
              <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <div style={{ display: "flex" }}> <BookmarkBorderIcon style={{fontSize:"20px"}} /><Typography>Deliver Product</Typography> <KeyboardArrowDownIcon style={{fontSize:"20px"}}/> </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
              <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <div style={{ display: "flex" }}> <BookmarkBorderIcon style={{fontSize:"20px"}} /><Typography>All Staff</Typography> <KeyboardArrowDownIcon style={{fontSize:"20px"}}/> </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
          </Box>
          
      </Box>
      
  )
}

export default AdminHeader