import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {Drawer, List,ListItem,ListItemButton,ListItemIcon,ListItemText, IconButton, Typography, Box} from "@mui/material"
import pix from "./6.jpg"

import { display } from '@mui/system';
import HoldCart from './HoldCart';
import TotalSales from './TotalSales';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height:"100%",
        minHeight: "100vh",
        backgroundImage: `url(${pix})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover" ,
        display: "flex",
        justifyContent: "center",
     
        
        "& .holdMyCard": {
            width: "72%",
            display: "flex",
            justifyContent:"space-between"
        }
        
    }
}))


function CartPage ()
{
     const classes = useStyles()
  return (
      <Box className={classes.root}>
          
          <Box className='holdMyCard'>
              <HoldCart />
              <TotalSales/>
          </Box>
      </Box>
  )
}

export default CartPage