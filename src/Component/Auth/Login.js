import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {Drawer, List,ListItem,ListItemButton,ListItemIcon,ListItemText, IconButton, Typography, Box} from "@mui/material"
import pix from "./6.jpg"

import { display } from '@mui/system';



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
            justifyContent: "space-between",


             "& .MuiTypography-root": {  
                color: "#FFFFF3",
                fontSize:"15px"

          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
            

        }
        
    }
}))


function Login ()
{
     const classes = useStyles()
  return (
      <Box className={classes.root}>
          
          <Box className='holdMyCard'>
              
              <Typography>this is the sign in</Typography>
          </Box>
      </Box>
  )
}

export default Login