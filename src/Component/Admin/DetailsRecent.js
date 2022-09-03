import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography, Box, Button, Menu, MenuItem } from "@mui/material"
import { height } from '@mui/system';
import axios from "axios"
import {useSelector} from "react-redux"

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
            borderRadius: "5px",
           
            color: "black",
            flexDirection: "column",
          
        },
        "& .detailsContainer": {
        
            Width: "auto",
            height: "auto",
            padding: "20px 20px 0px 20px",
            
        },
        "& .holdDetails": {
            width: "100%",
            height: "390px",
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
        },
        "& .fanHolder": {
            width: "95%",
            height: "370px",
            border: "1px solid lightgrey",
            borderRadius: "5px",
            display: 'flex',
           
            flexDirection: "column",
            alignItems: "center",
        },
        "& .detailOrderCon": {
            width: "95%",
            height: "70px",
            borderBottom: "1px solid lightgrey",
            display: "flex",
            justifyContent: 'space-between'
            
        },
        "& .numCon": {
            width: '200px',
            height: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            marginTop: "15px",
            
           
            
        },
        "& .oppCon": {
            
            "& .MuiTypography-root": {
                fontWeight: "700"
            }
        },

        "& .nameDetailCon": {
            width: '200px',
            height: "100%",
            display: "flex",
            
           
          
        },
        "& .jamJam": {
            height: "100%",
            width: "30%",
         
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        "& .imgCon": {
            width: "50px",
            height: '50px',
            borderRadius: "50%",
            backgroundColor: '#A33F53',
            
        },
        
        "& .bamBam": {
            height: "100%",
            width: "70%",
            display: 'flex',
            justifyContent: "center",
            alignItems: "center"
            
        },
        "& .nammeConn": {
            height: "40px",
            width: "100%",
        },
        "& .userNameCon": {

            "& .MuiTypography-root": {
                fontSize: "13px",
                color: "black"
            }
        },
        "& .userStatus": {

            "& .MuiTypography-root": {
                fontSize: "13px",
                color: "grey"
            }
        },
        "& .userDDetailsCon": {

            width: "95%",
            height: "80px",
            borderBottom: "1px solid lightgrey",
            display: "flex",
            justifyContent: 'space-between',
                
        },
        "& .dOtherSide": {
            width: "50%",
            height: "auto",
           
            paddingTop: "20px"

        },
        "& .outOtherSide": {
            width: "50%",
            height: "100%",
            display: "flex",
        },
        "& .deliverAd": {


            "& .MuiTypography-root": {
                fontSize: "13px",
                color: "grey",
                fontWeight: "600"
            }
        },
        "& .paymentCon": {
            width: "50%",
            height: "auto",
            paddingTop: "20px"
          
        },
        
        "& .paymentStatus": {
            width: "50%",
            height: "auto",
            paddingTop: "20px"
        },
        "& .addressDelBut": {
            padding: "5px",
            backgroundColor: 'green',
            width: "60px",
            borderRadius:'5px',
            
              "& .MuiTypography-root": {
                fontSize: "13px",
                color: "white",
                fontWeight:"600"
            }
        },
        "& .holdAllProduct": {
            
            width: "95%",
            height: "160px",
           
            display: "flex",
            borderBottom: "1px solid lightgrey",
            overflowY: 'auto',
            flexDirection:"column"
            
         
        },
        "& .conProduct": {
            display: "flex",
            height: "70px",
            width: '100%',
           
            flexShrink: "0",
            marginTop:'10px',
        },
        "& .picVin": {
            height: "100%",
            width: "65px",
       
            display: "flex",
            
            alignItems:"center"
        },
        "& .myHolderPic": {
            width: "60px",
            height: "60px",
            borderRadius: "50%",
           
        },

        "& .breadName": {
            width: "auto",
            height: "10px",
        
            display: "flex",
            padding:"10px 0px 0px 0px",
            flexDirection:"column"
            
            
        },
        "& .priceCon": {
            height: "100%",
            flex: "1",
          
            display: "flex", 
            justifyContent: "flex-end",
            alignItems:"center",
        },
        "& .totalCon": {
            
            width: "95%",
            height: "50px",
            
            display: "flex",
            justifyContent:"space-between"
          
          
        },
        "& .conTotal": {
            
            height: "100%",
            width:"200px",
            
            display: "flex", 
            alignItems: "center",
      
        
        },
        "& .lamdaFunction": {
            width: "100%",
            height:"50px",
            display: "flex",
            justifyContent:"flex-end",
        },
        "& .yummCon": {
            marginRight: "20px",
            width: "300px",
            justifyContent: "space-around",
            display:"flex",
            
        }

        
    }
}))


function DetailsRecent ()
{
    const classes = useStyles()
    const [data, setData] = React.useState([])
    const detailID = useSelector((state) => state.persistedReducer.orderDetails)
    
    // const getOne = async () =>
    // {
    //     try
    //     {
    //         await axios.get(`http://localhost:4040/api/all/single/order/${detailID._id}`).then((result) =>
    //         {
    //             console.log("show me one single data", result)
    //             setData(result)
    //             console.log("show me one single data show now", data)
    //         })
            
    //     } catch (error)
    //     {
    //         console.log("something wrong with the functions", error)
    //     }
    // }

    React.useEffect(() =>
    {
        // getOne()
        // console.log("na the id i won see", detailID)
    },[])
  return (
      <>
          <Box className={classes.root}>
              <Box className='detailsBoxHolder'>
                  <Box className="detailsContainer"> <Typography>Order Details</Typography></Box>
                  <Box className="holdDetails">
                      <Box className="fanHolder">
                          <Box className='detailOrderCon'>
                              <Box className='numCon'>
                                  <Box className="oppCon"><Typography>{detailID.fullName }</Typography></Box>
                                  <Box className="">02 april, 2020. 20:23</Box>
                              </Box>
                              <Box className='nameDetailCon'>
                                  <Box className='jamJam'>
                                      <Box className="imgCon">
                                      </Box>
                                  </Box>
                                  <Box className='bamBam'>
                                      <Box className='nammeConn'>
                                          <Box className="userNameCon"><Typography>{detailID.fullName }</Typography></Box>
                                          <Box className="userStatus"><Typography>customer</Typography></Box>
                                      </Box>
                                  </Box>
                              </Box>
                          </Box>
                          <Box className="userDDetailsCon">
                              <Box className="dOtherSide">
                                  <Box className='deliverAd'> <Typography>Delivery Address</Typography></Box>
                                  <Box  className='addressDel'> <Typography>{detailID.address}</Typography></Box>
                                
                              </Box>
                              <Box className='outOtherSide'>
                                  <Box className="paymentCon">
                                         <Box className='deliverAd'> <Typography>Status</Typography></Box>
                                         <Box  className='addressDel'> <Typography>Not Deliver</Typography></Box>
                                  </Box>
                                  <Box className="paymentStatus">
                                      <Box className='deliverAd'> <Typography>Payment Status</Typography></Box>
                                      <Box  className='addressDelBut'> <Typography>Complete</Typography></Box>
                                  </Box>
                                  
                              </Box>
                          </Box>
                          <Box className='holdAllProduct'>
                              
                              {
                                  detailID.productOrder?.map((props) => (
                                       <Box className="conProduct">
                                  <Box className="picVin">
                                              <Box className="myHolderPic">
                                                  <img src={props.avatar } style={{width:"100%", height:"100%", borderRadius:"50%"}} />
                                      </Box>
                                  </Box>
                                  <Box className='breadName'>
                                              <Box><Typography sx={{ fontWeight: "600" }}>{props.name }</Typography></Box>
                                      <Box style={{marginTop:"-3px"}}><Typography sx={{color:"grey"}}>Client Bread</Typography></Box>
                                  </Box>
                                  <Box className='priceCon'>
                                      <span style={{fontWeight:"600", fontSize:"20px", marginTop:"-5px"}}>+</span>
                                      <Typography sx={{fontWeight:"600", color:"green"}}>#2500</Typography>
                                  </Box>
                              </Box>
                                  ))
                              }
                             
                            
                             
                          
                            
                             
                          </Box>
                          <Box className="totalCon">
                              <Box  className='conTotal' ><Typography>Total</Typography></Box>
                              <Box >
                                  <Box className='priceCon' >
                                       <span style={{fontWeight:"600", fontSize:"20px", marginTop:"-5px"}}>+</span>
                                      <Typography sx={{fontWeight:"600", color:"green"}}>#2500</Typography>
                                  </Box>
                                  
                              </Box>
                          </Box>
                      </Box>
                  </Box>
                  <Box className="lamdaFunction">
                      
                      <Box className="yummCon">
                          <button   style={{ cursor: "pointer", backgroundColor:"#A33F53", color:"white"}}>Cancel Order</button>
                               <button style={{ cursor: "pointer", backgroundColor:"#A33F53", color:"white"}}>Send To Dispatch</button>
                               
                      </Box>
                  </Box>
              </Box>
          </Box>
      </>
  )
}

export default DetailsRecent