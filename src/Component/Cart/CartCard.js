import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography, Box } from "@mui/material"

import axios from "axios"
import { colors } from '@material-ui/core';
import pix from "./1.png"
import { removeCart } from "../Global/actions"
import {useDispatch} from "react-redux"
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "140px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #A33F53",
        marginBottom:"20px",
    
        
        "& .holdmyCardd": {
            width: "97%",
            height: "90%",
            display:"flex",  
        },
        
        "& .boxImg": {
            width: "150px",
            height: "100%",
    
        },
        "& .namePrice": {
            width: "350px",
            height: "100%",
           
            display: "flex",
            flexDirection: "column",
            justifyContent:"center",
        },

        "& .breadName": {
            
             "& .MuiTypography-root":{
                fontSize:"35px",
                fontWeight:"300",
                color: "#F5B986",
                fontWeight: "600",
                letterSpacing:"-2px",
            
           
          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
        },

        "& .detailCon": {
            
              "& .MuiTypography-root":{
                color: "#FFFFF3",
                fontSize: "13px",
                fontWeight: "500",
                lineHeight:"15px",
               
            
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
        },
        "& .qtyCon": {
            display: "flex",
            flexDirection: "column",
         
            height: "100%",
            width: "50px",
            justifyContent: 'center',
            alignItems:"center"
        },

        "& .posCon": {
            width: "25px",
            height: "30px",
            backgroundColor: "#A33F53",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor:"pointer",
            
            
              "& .MuiTypography-root":{
                color: "#FFFFF3",
                fontSize: "20px",
                fontWeight: "500",
                lineHeight:"15px",
               
            
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
             
        },
        "& .posNag": {
            width: "25px",
            height: "30px",
            backgroundColor: "#A33F53",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor:"pointer",
            
            
              "& .MuiTypography-root":{
                color: "#FFFFF3",
                fontSize: "25px",
                fontWeight: "600",
                lineHeight:"15px",
               
            
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
             
        },
        
        "& .posNum": {
            

            
              "& .MuiTypography-root":{
                color: "#FFFFF3",
                fontSize: "18px",
                fontWeight: "600",
                lineHeight: "15px",
                marginTop: "10px",
                marginBottom: "10px",
                
               
            
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
            
        },

        "& .dpriceCon": {
            width: "200px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
             "& .MuiTypography-root":{
                color: "#F5B986",
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "15px",
                marginTop: "10px",
                marginBottom: "10px",
                
               
            
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
        }

        
        
    }
}))

function CartCard ({props})
{
  const classes = useStyles()
  const dispatch = useDispatch()
  return (
      <Box className={classes.root} >
          <Box className='holdmyCardd'>
              <Box className="boxImg">
                  <img src={props.avatar} style={{width:"100%", height:"100%", onjectFit:"cover"} }/>
              </Box>
              <Box className="namePrice">
          <Box className="breadName"><Typography>{props.name }</Typography></Box>
                  <Box className='detailCon'>
                      <Typography>  typically flavored with ginger, cloves, nutmeg, and cinnamon and
                          sweetened with honey,
                          sugar, or molasses. Gingerbread foods vary
                      </Typography>
                  </Box>
                 
            
              </Box>
              <Box className='qtyCon'>
                  
                      <Box className='posCon'> <Typography>+</Typography></Box>
                      <Box className='posNum'><Typography>{props.quantity }</Typography></Box>
          <Box className="posNag" onClick={() =>
          {
            dispatch(removeCart(props))
                      }}><Typography>-</Typography></Box>
              </Box>
              
              <Box className='dpriceCon'>
          <Typography>₦{props.price }</Typography>
              </Box>
          </Box>
      </Box>
    )
    
}

export default CartCard