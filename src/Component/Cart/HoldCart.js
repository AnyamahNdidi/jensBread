import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography, Box } from "@mui/material"
import {useDispatch, useSelector} from "react-redux"
import axios from "axios"
import { colors } from '@material-ui/core';
import CartCard from './CartCard';
const useStyles = makeStyles((theme) => ({
    root: {
        height: "auto",
        width: "70%",
        display:"flex",
        justifyContent: "center",
     
        
        flexWrap: "wrap",
        marginTop:"100px",

        "& .nnammeCon": {
            width: "97%",
           
         display:"flex",
        justifyContent:"center",
        
        flexWrap: "wrap",
        }
      
        
       
        
    }
}))

function HoldCart ()
{
    const classes = useStyles()
    const DataCart = useSelector((state)=> state.myReducer.cart)
  return (
   
      <Box className={classes.root}>
          {
              DataCart.map((props) => (
                  <CartCard props={props }/>
              ))
          }
          
      </Box>
  )
}

export default HoldCart