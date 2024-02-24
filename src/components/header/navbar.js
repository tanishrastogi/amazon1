import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import NavSearchBar from "./navSearchBar";
import Badge from '@mui/material/Badge';
import Avatar from "@mui/material/Avatar";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { NavLink, useNavigate } from "react-router-dom"
import { loginContext } from "../context/context";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from "react-redux"
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


function Navbar() {
    const history = useNavigate("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    const [text, setText] = useState("");
    const [liopen, setLiopen] = useState(true);
    console.log(text);

    const { products } = useSelector(state => state.getproductsdata);
    // console.log((products[0]["deal"]));
    // console.log(Object.keys(products[0]));

    const { account, setAccount } = useContext(loginContext);

    const getvaliduser = async () => {
        const res = await fetch("https://charliesamazon.onrender.com/validUser", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        })

        const data = await res.json();
        // console.log(data);
        if (res.status !== 201) {
            console.log("error");
        }
        else {
            console.log("data valid");
            setAccount(data);
        }
    }


    const logoutUser = async () => {
        const res2 = await fetch("https://charliesamazon.onrender.com/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            credentials: "include"
        })

        const data2 = await res2.json();

        if (res2.status !== 201) {
            console.log("error");
        }
        else {
            console.log("logged out");
            setAccount(false);
            alert("user logged out")
            history("/");
        }
    }


    const getText = (items) => {

        setText(items);
        setLiopen(false);
        if(text===""){
            setLiopen(true);
        }
    }

    

    useEffect(() => {
        getvaliduser();
    }, [])








    // console.log(account);

    return <header>
        <nav>
            <div className="left">

                <NavLink to={"/"}><img className="logo" src={require("../../images/amazonLogo.png")} alt="logo" /></NavLink>
                <div className="navSearchBar">
                    <div className="searchBar">
                        <input type="text" name="searchBar" onChange={(e) => { getText(e.target.value) }} placeholder="    search for your products" />
                        
                    </div>
                    <div className="searchIcon">
                        <SearchIcon sx={{ margin: "4px 0 0 3px" }} />
                    </div>

                </div>


            </div>
            <div className="right">
                <div className="signInBtn" style={{ padding: "5px 5px 0 0" }}><NavLink to={"/login"}>sign-in</NavLink></div>
                <div className="cartBtn">
                    {account ? <>
                        <NavLink to="/buynow">
                            <Badge badgeContent={account.carts.length} color="primary">
                                <ShoppingCartOutlinedIcon id="icon" sx={{ color: "#fff" }} />
                            </Badge>
                        </NavLink>
                    </>
                        : <Badge badgeContent={account.carts ? account.carts.length : 0} color="primary">
                            <ShoppingCartOutlinedIcon id="icon" sx={{ color: "#fff" }} />
                        </Badge>}
                    <p>Cart</p>
                </div>
                {

                    account ? <Avatar className="avtar2"
                        sx={{ backgroundColor: "blue", fontWeight: "bold", color: "white", margin: "10px 0 0  25px" }}
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >{account ? account.fName[0].toUpperCase() : ""}</Avatar> : <Avatar
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        className="avtar" sx={{ fontWeight: "bold", margin: "10px 0 0  25px" }}>{account ? account.fName[0].toUpperCase() : "N"}</Avatar>
                }

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        !account ? <NavLink to="/login"><MenuItem onClick={handleClose} style={{ color: "black", textDecoration: "none" }}>My account</MenuItem></NavLink> : <MenuItem onClick={handleClose}>My account</MenuItem>
                    }

                    {
                        account ?
                            <MenuItem onClick={() => { logoutUser(); handleClose() }}>Logout</MenuItem> : ""
                    }
                </Menu>

            </div>
        </nav>
    </header>
}

export default Navbar;
