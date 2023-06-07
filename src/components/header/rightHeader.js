import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


const Hello = ()=>{
    let b = [1,2,3,4,5,6]
    return b.map((e)=>{
        return <List>
        <ListItem>{e}</ListItem>
    </List>
    })
    

}  

export default Hello;