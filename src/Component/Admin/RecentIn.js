import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography, Box, Button, Menu, MenuItem } from "@mui/material"
import axios from "axios"
import AllProduct from '../AllProduct/AllProduct';
import { useDispatch, useSelector } from "react-redux"
import { addToDeatils } from "../Global/actions"
import { io } from "socket.io-client";
import moment from "moment";
const socket = io("http://localhost:4040") 



const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
       
        width: "28%",
        backgroundColor: "#F5F5F5",
        borderRadius: "5px",
      
        "& .dBox": {
            Width: "auto",
            height: "auto",
            padding: "20px",
        },
        "& .ThreeCon": {
            width: "125%",
            height:"40px",
           
            display: "flex",
            justifyContent: "center",
            alignItems:"ceneter"
            
            
        },
        "& .HoldThree": {
            display: "flex",
            height: "auto",
            width:"90%",

        },

        "& .orderIn": {
            backgroundColor: "#CDCDCD",
            height: "40px",
            width: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            
            "&:hover": {
                backgroundColor: "#A33F53",
                transition: "all 500ms ease-out",
                transform:"scale(1.01)",
                
                "& .MuiTypography-root": {
                    color:"white"
                }
            }
            
        },

        "& .tagOrder": {
           backgroundColor: "#A33F53",
            height: "40px",
            width: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer", 
        },

        "& .preCon": {
           backgroundColor: "#CDCDCD",
            height: "40px",
            width: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            
             "&:hover": {
                backgroundColor: "#A33F53",
                transition: "all 500ms ease-out",
                transform:"scale(1.01)",
                
                "& .MuiTypography-root": {
                    color:"white"
                }
            }
            
          
        },
        "& .delcon": {
           backgroundColor: "#CDCDCD",
            height: "40px",
            width: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            
             "&:hover": {
                backgroundColor: "#A33F53",
                transition: "all 500ms ease-out",
                transform:"scale(1.01)",
                
                "& .MuiTypography-root": {
                    color:"white"
                }
            }
            
           
        },
        "& .orderConnn": {
            height: "auto",
            width: "125%",
            overflowY: 'auto',
            marginTop:"20px",
            display: "flex",
            flexDirection: "column",
          
            justifyContent: "center",
            alignItems:"center"
            
           
        },
        "& .dcox": {
            width: "88%",
            height: "70px",
           
            borderRadius: "5px",
            marginBottom: "5px",
            flexShrink: "0",
            cursor: "pointer",
            border: "1px solid #A33F53",
            display:"flex",
            

              "&:hover": {
                backgroundColor: "rgb(237,217,221)",
                transition: "all 500ms ease-out",
                transform:"scale(1.01)",
                
               
            }
            
        },
        "& .orderDate": {
          
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft:"15px",
        },
        "& .dOrdrConoo": {
            

            "& .MuiTypography-root": {
                fontWeight: "600",
                fontSize:"20px"
                }
        },

        "& .dPriceCon": {
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            
            width:"45%",
            
        },
        "& .uSayWetin":{
            display: "flex",
           
            width: "70%",
            justifyContent:"space-between"
        },
        "& .ddPrice": {
            
             "& .MuiTypography-root": {
                    fontWeight:"500"
                }
        },
      
        "& .ffPrice": {

            width: "25px",
            height: "20px",
            display: "flex",
            marginTop:"3px",
            justifyContent:"center",
            alignItems: "center",
            backgroundColor: "#A33F53",
            borderRadius:"5px",

             "& .MuiTypography-root": {
                 color: "white",
                 fontWeight:"600"
                }
        }
      
   
       
        
     
        
    }
}))


function RecentIn ()
{
    const classes = useStyles()
    const [allorder, setAllOrder] = React.useState([])
    const dispath = useDispatch()

    const getAllOrder = async () =>
    {
        try
        {
            await axios.get("http://localhost:4040/api/all/allorder").then((result) =>
            {
                console.log("whats happing to the api",result)
                setAllOrder(result?.data?.data)
                console.log("this is all resent data",allorder)
            })
        } catch (error)
        {
            console.log("something wrong with the function", error)
        }
       
    }

      React.useEffect(() => {
      
        getAllOrder();

        socket.on("newData", (file) => {
          setAllOrder([...allorder, file]);
          console.log("trying to know why", file._id)
       
          getAllOrder();
        });
      }, []);

  return (
      <>
          <Box className={classes.root}>
              <Box className="detailsBox" >
                  <Box className="dBox"><Typography>Recent Order</Typography></Box>
                  <div className='ThreeCon'>
                      <div className='HoldThree'>
                        <div className='orderIn'> <Typography>Order In</Typography></div>
                      <div className="preCon"> <Typography>Prepared</Typography></div>
                      <div className='delcon'> <Typography>Deliver</Typography></div>
                      </div>
                     
                     
                  </div>
                  <Box className="orderConnn">
                      
                      <>
                          {
                              allorder?.map((props) => (
                                  
                                  <div
                                      onClick={() =>
                                      {
                                          console.log("this  is the food id", props._id)
                                          dispath(addToDeatils(props))
                                          localStorage.setItem("what is this", JSON.stringify("lo world"));
                                      }}
                                      className='dcox'
                                  >
                          <div className='orderDate'>
                              <div className='dOrdrConoo'><Typography>{props.fullName} </Typography></div>
                                          <div ><Typography>{props.createdAt}</Typography></div>
                              
                          </div>
                          <div className="dPriceCon">
                              <div className='uSayWetin'>
                                    <div className="ddPrice"><Typography> New Order</Typography></div>
                                  <div className='ffPrice'><Typography>></Typography></div>
                              </div>
                            
                          </div>
                      </div>  
                                  
                              ))
                          }
                      </>
                    
                      
                     
                
                      
                    </Box>
              </Box>
          </Box>
      </>
  )
}

export default RecentIn