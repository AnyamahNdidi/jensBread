import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography, Box } from "@mui/material"
import pix from "./1.png"
import { useDispatch } from "react-redux"
import {addToCart} from "../Global/actions"

const useStyles = makeStyles((theme) => ({
    root: {
        

        "& .cardName": {
            width: "300px",
            height: "auto",
            
            display: "flex",
            flexDirection: "column",
            margin: "10px",
            marginBottom:"20px",
            position:"relative",
            backgroundColor:"transparent",
           
           
            borderRadius:"5px",
        },
        "& .nameCon": {
            width: "100%",
            height: "auto",
           
         
            
            
            "& .MuiTypography-root": {  
                fontSize:"58px",
                fontWeight: "700",
                lineHeight:"50px",
                color: "#EEB480",
                letterSpacing: "-5px",
                textAlign:"center",
            

        
           
           
          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
            
             
        },

        "& .imgCon": {
            width: "100%",
            height: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           
            position: "relative",
            top:"-5px",
            
        },
        "& .imgD": {
            width: "100%",
            borderRadius: "5px",
            
        },
        "& .rateCon": {
            display: "flex",
          
        },
        "& .disCon": {
            height: "auto",
            padding:'15px',
            "& .MuiTypography-root": {  
                color: "#FFFFF3",
                fontSize:"11px"
        
           
           
          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
        },

        "& .priceAdd": {
            display: 'flex',
            padding: "15px",
            justifyContent: "space-between",
            
            
          
        },
        "& .price": {
            

              "& .MuiTypography-root": {  
                color: "#EEB480",
                fontSize:"20px"

          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
        },
        "& .boxName": {
            
            backgroundColor: '#A44053',
            padding: "10px 30px 10px 30px",
            cursor:"pointer",
         
            borderRadius:"20px",
              "& .MuiTypography-root": {  
                color: "#FFFFF3",
                fontSize:"11px"

          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
        }

    }
}))

function Card ({props})
{
    const classes = useStyles()
    const dispatch = useDispatch()
  return (
      <div>
          <Box className={classes.root}>
              <Box className='cardName'>
                  
                   <Box className='nameCon'>
                      <Typography>{props.name }</Typography>
                  </Box>
                  
                  <Box className='imgCon'>
                      <Box className='imgD'>
                          <img src={props.avatar} style={{width:"100%", height:"100%", borderRadius:"5px 5px 0px 0px", objectFit:"cover" }}/>
                      </Box>
                  </Box>
                 
                  <Box className='disCon'>
                      <Typography>
                          typically flavored with ginger, cloves, nutmeg, and cinnamon and
                          sweetened with honey,
                          sugar, or molasses. Gingerbread foods vary
                      </Typography>
                  </Box>
                  <Box className='rateCon'>
                      
                  </Box>
                  <Box className='priceAdd'>
                      
                      <Box className='price'><Typography>₦{props.price }</Typography></Box>
                      <Box
                          onClick={() =>
                          {
                              dispatch(addToCart(props))
                          }}
                          className="boxName">
                          <Typography>Add</Typography>
                      </Box>
                  </Box>
              </Box>
          </Box>
      </div>
  )
}

export default Card