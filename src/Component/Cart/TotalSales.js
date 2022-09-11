import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography, Box } from "@mui/material"

import axios from "axios"
import { colors } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom"
import MyPayment from './MyPayment';
const useStyles = makeStyles((theme) => ({
    root: {
        height: "300px",
        backgroundColor:"#424242",
        width: "25%",
        display: "flex",
        alignItems:"center",
       
        marginTop:"100px",
        flexWrap: "wrap",
        flexDirection:"column",

        "& .nnammeCon": {
            width: "97%",
           
         display:"flex",
        justifyContent:"center",
        
        flexWrap: "wrap",
        },
        "& .sumCon": {
            height: "50px",
            width: "100%",
         
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

               
             "& .MuiTypography-root":{
                color: "#FFFFF3",
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "15px",
                marginTop: "10px",
                marginBottom: "10px",
                
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
        
        },
        "& .salesCon": {
            display: "flex",
            width:"70%",
            height: "auto",
            justifyContent: "space-between",
            padding: "30px",
            paddingTop:"10px",
        },
        "& .salesTotal": {
         
            justifyContent: "space-between",
            
             "& .MuiTypography-root": {  
                color: "#EEB480",
                fontSize:"15px"

          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
        },
        "& .priceConc": {
            
             "& .MuiTypography-root": {  
                color: "#FFFFF3",
                fontSize:"15px"

          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
        },
        "& .proceeCon": {
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            width: "70%",
            padding: "15px",
            backgroundColor: "#A33F53",
            borderRadius: "5px",
            cursor:"pointer",

            "& .MuiTypography-root": {  
                color: "#FFFFF3",
                fontSize:"16px"

          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
            
        }
      
    }
}))

function TotalSales ()
{
  const classes = useStyles()
  const totalSales = useSelector((state)=> state.persistedReducer.totalPrice)
  return (
   
      <Box className={classes.root}>

          <Box className='sumCon'><Typography>Summary</Typography></Box>
          <Box className='salesCon'>
              <Box className='salesTotal'><Typography>Total Sales</Typography></Box>
        <Box className='priceConc'> <Typography>₦{ totalSales }</Typography></Box>
      </Box>
      <Link to= "/details">
        <Box className="proceeCon">
        <Typography>
         Procced To Payment
        </Typography>
          </Box>
      </Link>
          
      </Box>
  )
}

export default TotalSales