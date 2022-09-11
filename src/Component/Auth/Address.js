import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {Drawer, List,ListItem,ListItemButton,ListItemIcon,ListItemText, IconButton, Typography, Box, Button} from "@mui/material"
import pix from "./6.jpg"
import TextField from '@mui/material/TextField';
import MyPayment  from "../Cart/MyPayment"

import { display } from '@mui/system';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { PaystackButton } from 'react-paystack'
import { useSelector } from "react-redux";
import axios from "axios"


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
            alignItems: "center",
           



            
        },
         "& .holderD": {
            width: "400px",
            height: "400px",
            backgroundColor: "white",
            display: "flex",
             flexDirection: "column",
            alignItems:"center",
            
             
        
        },
         
        "& .titleCon": {
            display: "flex",
            justifyContent: "center",
            alignItems:"center",

            "& .MuiTypography-root": {  
                color: "black",
                fontSize:"15px"

          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
        }
        },
        "& .inPutHolder": {
            display: "flex",
            flexDirection:"column",
            width: "80%",
            height: "auto",
            alignItems: "center",
            marginTop:"10px",
            
        }
    },
    
       
        
        
        
}))


function Address ()
{
    const classes = useStyles()
    const cartTotalPrice = useSelector((state) => state.persistedReducer.totalPrice);
    const cartData = useSelector((state) => state.persistedReducer.cart);

  const publicKey = "pk_test_23d13fb294f558953fdcdc971aa6ece27ff088e2"
  const amount = cartTotalPrice * 100 // Remember, set in kobo!
  const [email, setEmail] = React.useState("")
  const [name, setName] = React.useState("")
    const [address, setAddress] = React.useState("")
    
    const componentProps = {
        email,
        amount,
        name,
       
    
    metadata: {
      name,
      address,
    },
    publicKey,
    text: "Pay Now",
        onSuccess: () =>
        {
            console.log(name, email, address)
            axios
			.post("http://localhost:4040/api/all/detail/post", {
                productOrder: cartData,
                fullName:name,
                email,
                address
                
			})
			.then((res) => {
				console.log(res);
			});
            
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  }
   
    
       const datasubmit =  (value)=>{
          try{
            console.log(value)
            
          }catch(error){
            console.log("error happwn when submitting", error)
          }
      }
    
  return (
      <Box className={classes.root}>
          
          <Box className='holdMyCard'>
              
              <Box className="holderD">
                  <Box className="titleCon"> <Typography>Address Details</Typography></Box>
                  <Box className="inPutHolder">
                    <form>
                      <TextField id="filled-basic" required fullWidth label="Full Name" variant="filled"
                          value={name}
                              onChange={(e) => setName(e.target.value)}
                          />
                           
                          <TextField id="filled-basic" required fullWidth label="email" variant="filled"
                          value={email}
                              onChange={(e) => setEmail(e.target.value)}
                          />
                          
                          <TextField id="filled-basic" required fullWidth label="address" variant="filled"
                            value={address}
                              onChange={(e) => setAddress(e.target.value)}
                          />
                           
                      </form>
                      <PaystackButton {...componentProps} />  
                          
                       
                  
                  </Box>

              </Box>
             
          </Box>
      </Box>
  )
}

export default Address