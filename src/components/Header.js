import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { Table } from '@mui/material';
import { padding } from '@mui/system';

import {DLT} from '../redux/actions/action'

export const Header = () => {

    const [pricetotal,setPricetotal]=useState(0);

    const getdata=useSelector((state)=>state.cartreducer.carts);
    console.log(getdata);

    const dispatch = useDispatch();



    //Don't worry about this code, this code from Material UI
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
   //------------End this code from Material UI

   

    const dlt = (id) =>{
        dispatch(DLT(id))
    }

    const total = ()=>{
        let price = 0;
        getdata.map((ele,k)=>{
            price = ele.price * ele.qnty + price
        });
        setPricetotal(price);
    }
;
    useEffect(()=>{
        total()
    },[total])

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light ">Home</NavLink>

                    </Nav>

                    <Badge badgeContent={getdata.length} color="primary" id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true"aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                        <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>

                </Container>
                <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button',}}>

                    {
                        getdata.length ?
                        <div className='card_details' style={{width:"24rem", padding:10}}>

                            <Table>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Resturant Name</th>
                                    </tr>
                                </thead>
                           
                                <tbody>
                                    {
                                        getdata.map((e)=>{

                                            return(
                                                <>
                                                 <tr>
                                                    <td>
                                                   <NavLink to={`/cart/${e.id}`} onClick={handleClose}> <img src={e.imgdata} alt="" style={{width:"5rem",height:"5rem"}}/></NavLink>
                                                    </td>
                                                    <td>
                                                        <p>{e.rname}</p>
                                                        <p>Price: {e.price}Tk.</p>
                                                        <p>Quantity: {e.qnty}</p>
                                                        <p style={{color:"red",fontSize:20, cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                                            <i className='fas fa-trash smalltrash'></i>

                                                        </p>
                                                    </td>
                                                    <td className='mt-5' style={{color:"red",fontSize:20, cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                                    <i className='fas fa-trash largetrash'></i>
                                                    </td>
                                                 </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                              <p className='text-center'>Total: {pricetotal} Tk.</p>
                        </div>:
                        <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                        <i className='fas fa-close smallclose' 
                        onClick={handleClose}
                        style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                        <p style={{fontSize:22}}>Your cart is empty</p>
                    <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
                    </div>
                    }
                  

                    
                </Menu>
            </Navbar>

        </>
    )
}
