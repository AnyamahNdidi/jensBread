import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {Drawer, List,ListItem,ListItemButton,ListItemIcon,ListItemText, IconButton, Typography, Box} from "@mui/material"
import pix from "./6.jpg"

import { display } from '@mui/system';
import {useNavigate} from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "./Loading"
import Header from "../Header/HeaderCom"
import { useDispatch, useSelector } from "react-redux";
import {createUser} from "../Global/actions"
import { RiWindowLine } from 'react-icons/ri';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



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
            justifyContent: "center",
            alignItem:"center",
           

             "& .MuiTypography-root": {  
                color: "#FFFFF3",
                fontSize:"15px"

          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
            

        },
        "& .regHolder": {
            width: "300px",
            height: "300px",
            backgroundColor:"white",
        }
        
    }
}))


function SignIn ()
{
     const classes = useStyles()
  return (
      <Box className={classes.root}>
          
          <Box className='holdMyCard'>
              
             
              <Box className='regHolder'>
              </Box>
          </Box>
      </Box>
  )
}

export default SignIn