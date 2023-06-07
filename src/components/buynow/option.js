import React from "react";

function Option({deleteData , get}){

    const removeData = async(req,res)=>{
        try {
            const res = await fetch("/remove/"+deleteData , {
                method:"DELETE",
                headers:{
                    Accept:"application/json",
                    "Content-type":"application/json"
                },
                credentials:"include"
            })    

            const data = await res.json();
            console.log(data);

            if(res.status === 400 || !data){
                console.log("error");
            }
            else{
                console.log("user deleted");
                get();
            }
        } 
        catch (error) {
            console.log(error);
        }
    }

    return <div className="add_remove_select" style={{display:"flex" , color:"#007185!important"}}>
        <select >
            <label>Qty:</label>
            
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <p style={{cursor:"pointer"}} onClick={()=>{removeData(deleteData)}}>Delete</p><span>|</span>
        <p className="forRemoveMedia" style={{cursor:"pointer"}}>Save or Later</p><span>|</span>
        <p className="forRemoveMedia" style={{cursor:"pointer"}}>See More Like This</p>

    </div>
}

export default Option;