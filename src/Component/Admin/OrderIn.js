import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography, Box, Button, Menu, MenuItem } from "@mui/material"
import DetailsRecent from './DetailsRecent';
import RecentIn from './RecentIn';

const useStyles = makeStyles((theme) => ({
       root: {
        height: "auto",
       
        width: "100%",
      
      
        display: "flex",
        justifyContent: "center",
        
        
        "& .detailsBox": {
            width: "80%",
            height: "450px",
            
            display: "flex",
           
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
            width: "100%",
            display: "flex",
            flexWrap:"wrap"
        }
        
    }
}))


function OrderIn ()
{
    const classes = useStyles()
  return (
      <Box className={classes.root}>
          <Box className='detailsBox'>
             
              <Box className="dmainCon">
                  <RecentIn />
                  <DetailsRecent/>
              </Box>
          </Box>
      </Box>
  )
}

export default OrderIn