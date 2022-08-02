import React from 'react'
import {AppBar, Toolbar, Tabs, Tab,Typography,useMediaQuery, useTheme, Box} from "@mui/material"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import DrawerComp from './DrawerCom';
import { display, flexbox } from '@mui/system';

import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"

const useStyles = makeStyles((theme)=>({
    root:{
        height:"70px",
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: 'transparent',
      
      

        "& .toolsBar":{
            display:"flex",
            justifyContent:"space-between",
            width:"78%",
            height: "75px",
            backgroundColor: "none",
             background: 'transparent',
           
        },
        "& .imgSixe":{
            width:"150px",
            height:"100%",
            
            display:"flex",  
        },
        "& .imgHolder":{
            // backgroundColor:theme.palette.primary.main,
            width:"50%",
            height:"100%"

        },
        "& .namepro":{
            height:"100%",
            width:"50%",
            display:"flex",
            alignItems:"center",

            "& .MuiTypography-root":{
                fontSize:"20px",
                fontWeight:"500",
                color:"#ffff",
                letterSpacing:"-1px",
                marginLeft:"-16px"
            //    "@media (max-width: 800px)":{
            //      fontSize:"65px",
            //     }
              }

        },
        "& .navBox":{
            width:"600px",
            height:"100%",
            display:"flex",
            justifyContent:"space-evenly",
            alignItems:"center",
            cursor:"pointer"
        },
        "& .nav":{

            "& .MuiTypography-root":{
                fontSize:"15px",
                fontWeight:"600",
                color:"#FFFFF3",
              
            //    "@media (max-width: 800px)":{
            //      fontSize:"65px",
            //     }
              }
        },
        "& .navCon":{
            width:"100px",
            height:"50%",
            backgroundColor:"#FFFFF3",
            color:"white",
         
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:"6px",
            boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",

            "& .MuiTypography-root":{
                fontSize:"15px",
                fontWeight:"600",
                color:"#303D45",
                textDecoration:"none"
              
            //    "@media (max-width: 800px)":{
            //      fontSize:"65px",
            //     }
              }
        },
        "& .dnavCon":{
            textDecoration:"none",
            color:"#FFFFF3",
        }
    }
    
}))


function HeaderCom ()
{
    const [colorChange, setColorchange] = React.useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
    window.addEventListener('scroll', changeNavbarColor);
    
    const classes = useStyles()
    const myNavigation = useNavigate()

    const theme = useTheme()
    console.log(theme)
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <div>
          <AppBar   elevation={0} className={classes.root}>
              <Toolbar className='toolsBar'>
                  
            <Box className='imgSixe'>
                      
            <div className='imgHolder'> 
            
            </div>
           
            <div className='namepro'>
            <Typography>jen's bread.</Typography>
            </div>
      </Box>
    {
        isMatch ? 
        (<DrawerComp/>) 
        :
                          (<Box className='navBox'>
                              
                              <Box className='nav'>
                                 <Typography>
                                     <Link to="/" className='dnavCon'>
                                    Home
                                    </Link>
                                  </Typography>
                              </Box>
                              
         <Box className='nav'>
         <Typography>Product</Typography>
         </Box>
   
         
                <Box className='nav'>
                  <Link to="/cart" className='dnavCon'>
                    <Typography>Cart</Typography>
                    </Link>
         </Box>
        
        
         <Box className='nav'>
         <Typography>
         <Link to="/tworoute" className='dnavCon'>
         Login
         </Link>
         </Typography>
         </Box>
      
        
         
         <Box className='navCon'  
         onClick={()=>{
            myNavigation("/sign")
          }}
         >
         <Typography>
         
         Register
         </Typography>
         </Box>
        
         
         </Box>)
    }
      </Toolbar>
      </AppBar>
    </div>
  )
}

export default HeaderCom