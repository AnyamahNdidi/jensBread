import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography, Box } from "@mui/material"
import Card from "./Card"
import axios from "axios"
import { colors } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        height:"auto",
        width: "90%",
        display:"flex",
        justifyContent:"center",
        
        flexWrap: "wrap",

        "& .nnammeCon": {
            width: "97%",
           
             display:"flex",
        justifyContent:"center",
        
        flexWrap: "wrap",
        }
      
        
       
        
    }
}))

function HoldCard ()
{
    const classes = useStyles()
    const [data, setData] = React.useState([])

    const getData = async () =>
    {
        try
        {
            await axios.get("http://localhost:4040/api/all").then((results) =>
            {
                setData(results?.data?.data)
                console.log("data i want to map ", data)
            }).catch((error) =>
            {
                console.log(error)
            })

        } catch (error)
        {
            console.log("error trying to get data", error)
        }
    }

   React.useEffect(() => {
		getData();
	}, []);
  return (
      <div>
          <Box className={classes.root}>
              <Box className='nnammeCon'>
                  {
                      data?.map((props) => (
                          <Card props={props }/> 
                      ))
                  }
                  
              
             
              </Box>
             
           
          </Box>
      </div>
  )
}

export default HoldCard