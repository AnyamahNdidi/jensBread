import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {Drawer, List,ListItem,ListItemButton,ListItemIcon,ListItemText, IconButton, Typography, Box} from "@mui/material"
import Hero from './Hero';
import HoldCard from './HoldCard';
import pix from "./6.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
         height:"100%",
        minHeight: "100vh",
        backgroundImage: `url(${pix})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover" 
        
    }
}))

function AllProduct ()
{
    const classes = useStyles()
  return (
      <Box className={classes.root}>
          <Hero />
          <HoldCard/>
      </Box>
  )
}

export default AllProduct