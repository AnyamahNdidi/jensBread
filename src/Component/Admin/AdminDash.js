import React from 'react'
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography, Box, Button } from "@mui/material"
import pix from './6.jpg'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AdminHeader from './AdminHeader';
import OrderIn from './OrderIn';

const useStyle = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        minHeight:"100vh",
        backgroundImage: `url(${pix})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        
    }
}))

function AdminDash ()
{
    const classes = useStyle()
  return (
      <Box className={classes.root}>
      <AdminHeader />
      <OrderIn/>
          
      </Box>
  )
}

export default AdminDash