import React, { useContext, useState } from "react";
import "./websiteEntrance.css"
import { Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
// import { width } from "@mui/system";
import { NavLink } from "react-router-dom";
import {ToastContainer , toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginContext } from "../context/context";




const Root = styled('div')(({ theme }) => ({
    width: '100%',
    // height:"10px",
    margin:"20px",
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));


let a = ""  


function SignIn(){

    const [logData , setData] = useState({
        email:"",
        password:""
    });
    console.log(logData);



    const {account , setAccount} = useContext(loginContext)


const [userData , setUserData] = useState("");


    function addData(e){
        const {name,value} = e.target;
        // console.log(name , value);   
        setData(()=>{
            return {
                ...logData,
                [name]:value
            }
        })
    }

    const loginData = async(e)=>{
        e.preventDefault();
        const {email , password} = logData;
        const res = await fetch("/login" , {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({email , password})
        })
        // console.log(userData);

        const data = await res.json();
        // console.log(data);
        if(res.status === 400 || !data){
            toast.warning(data.error , {
                position:"top-center",
                autoClose:2000
            });
        }
        else{
            setAccount(data)
            toast.success("login successful" , {
                position:"top-center",
                autoClose:2000
            });
            
        }

        // module.exports = {data};
    }


    

        

    
    

    return <div className="page" style={{backgroundColor:"white" , height:"30vh" }}>
        <section className="section">
            <div className="signIn_container">
            

                <div className="sign_header">
                    <NavLink to={"/"}><img src={require("./../../images/amazon-logo-s3f.png")}></img></NavLink>
                </div>
                <div className="signIn_form">
                    <form className="sign_form" method="POST" >
                        <h1>Sign In</h1>
                        <div className="form_data">
                            <label id="_2"><b>Email or mobile phone number</b></label>
                            <input id="email" value={logData.email} onChange={addData}  type="text" name="email"></input>
                        </div>
                        <div className="form_data">
                            <label id="_1"><b>Password</b></label>
                            <input id="password" value={logData.password} onChange={addData}  type="Password" name="password"></input>
                        </div>
                        <button className="signIn_btn" onClick={loginData}>Continue</button>
                    </form>
                </div>
                <Root>
                    <Divider><p style={{
                        fontSize:"13px",
                        fontWeight:"600",
                        color:"#999" }}>New to Amazon?</p></Divider>
                </Root>
                <div className="create_account">
                    <NavLink to={"/register"}><button >Create your Amazon account</button></NavLink>
                </div>
                
            
            </div>
            <div className="signin_footer" >
                <Root>
                    <Divider style={{ overflowX:"hidden", width:"40vw", margin:"auto" ,boxShadow:"0 0.2px 1px  rgba(0,0,0,0.5)"}}></Divider>
                </Root>        
            </div>
                
        </section>
        <ToastContainer />
    </div>;
    
    
}


// console.log(a);/

export default SignIn;