import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography, Box, Button, Menu, MenuItem } from "@mui/material"

const useStyles = makeStyles((theme) => ({
       root: {
        height: "100%",
       
        width: "70%",
      
      
        display: "flex",
       
        
        
        "& .detailsBoxHolder": {
            width: "100%",
            height: "500px",
            backgroundColor: "#F5F5F5",
            display: "flex",
            borderRadius:"5px",
           
            color: "black",
            flexDirection :"column",
          
        },
        "& .orderCon": {
            height: "50px",
            display:"flex",
            alignItems: "center",
            width: "100%",
            paddingLeft: "15px",
            
            
            "& .MuiTypography-root": {  
                color: "black",
                fontSize: "20px",
                fontWeight:"bold",

          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
        }
           
        },
        "& .dmainCon": {
            
        }
        
    }
}))


function DetailsRecent ()
{
    const classes = useStyles()
  return (
      <>
          <Box className={classes.root}>
              <Box className='detailsBoxHolder'>
              </Box>
          </Box>
      </>
  )
}

export default DetailsRecent