import React, { useState } from "react";
import "./websiteEntrance.css";
import { Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
// import { width } from "@mui/system";
import { NavLink , redirect, useNavigate} from "react-router-dom";
import {ToastContainer , toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    // height:"10px",
    margin:"20px",
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));





function SignUp(){

    const navigate = useNavigate();
    const [signUpData , setSignUpData] = useState({
        fName:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""
    })

    console.log(signUpData);

    const addData = (e)=>{
        const {name , value ,id} = e.target;
        // console.log(name , value , id);
        setSignUpData(()=>{
            return {
                ...signUpData,
                [name]:value
            }
        })
    }

    const senddata = async(e)=>{
        
        e.preventDefault();
        const {fName,email,mobile,password,cpassword} = signUpData;
        console.log(fName,email,mobile,password,cpassword);
        const res = await fetch("https://charliesamazon.onrender.com/register" , {
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                fName:fName
                ,email:email,mobile:mobile,password:password,cpassword:cpassword
            })
            
        })
    


        
        const data = await res.json()
        // console.log(res.body);
        // console.log(data);
        if(res.status ===422){
            // window.alert(data.error);
            toast.warning(data.error , {
                position:"top-center",
                autoClose:2000
            });
        }else{
            // 
            toast.success("Registeration successfull. Redirecting you to the signin page" , {
                position:"top-center",
                autoClose:2000
            });
            console.log(data);
            // navigate('/login');
            setTimeout(()=>{
                window.alert("Redirecting you to the signin page");
                navigate("/login")},3000);
        }
        // console.log(data.error);

        
    }    
       

    

    return <div className="page" style={{backgroundColor:"white" , height:"30vh" }}>
    <section className="section">
        <div className="signIn_container">
        

            <div className="sign_header">
                <NavLink to={"/"}><img src={require("./../../images/amazon-logo-s3f.png")}></img></NavLink>
            </div>
            <div className="signIn_form">
                <form className="sign_form" method="POST">
                    <h1>Create Account</h1>
                    <div className="form_data">
                        <label id="_1u"><b>Name</b></label>
                        <input type="text" name="fName" id="name" onChange={addData} value={signUpData.fName}></input>
                    </div>
                    <div className="form_data">
                        <label id="_2u"><b>email</b></label>
                        <input type="text" name="email" id="email" onChange={addData} value={signUpData.email} required></input>
                    </div>
                    <div className="form_data">
                        <label id="_1"><b>Mobile Number</b></label>
                        <input type="text" name="mobile" id="mobile" onChange={addData} value={signUpData.mobile}></input>
                    </div>
                    <div className="form_data">
                        <label id="_1"><b>Password</b></label>
                        <input type="password" name="password" id="password" onChange={addData} value={signUpData.password}></input>
                    </div>
                    <div className="form_data">
                        <label id="_1"><b>Confirm Password</b></label>
                        <input type="password" name="cpassword" id="cpassword" onChange={addData} value={signUpData.cpassword}></input>
                    </div>
                    <button onClick={senddata} className="signIn_btn">Continue</button>
                </form>
            <Root>
                <Divider style={{margin:"-20px 0"}}></Divider>
            </Root>
            <p className="accountPositive"><b>Already have an account? </b><NavLink to={"/login"}>Sign In</NavLink></p>
            </div>
            
            
        <ToastContainer />
        </div>
        <div className="signin_footer" >
            <Root>
                <Divider style={{ overflowX:"hidden", width:"40vw", margin:"auto" ,boxShadow:"0 0.2px 1px  rgba(0,0,0,0.5)"}}></Divider>
            </Root>        
        </div>
            
    </section>
</div>;
}


export default SignUp;
