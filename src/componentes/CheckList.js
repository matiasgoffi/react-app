import React from "react";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemText } from "@mui/material";

export const CheckList = () => {
   
 const technologies = ["html5", "css3", "javaScript", "reactJs", "NextJs"];

 const [checkedState, setCheckedState] = useState(
    new Array(technologies.length).fill(false)
 );

 const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
     setCheckedState(updatedCheckedState);
 }
  
  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {technologies.map((element, index) => (
        
        <ListItem key={index}>
            <ListItemText style={{color: 'black'}}>
                {element}
            </ListItemText>
            <input 
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={element}
                value={element}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
                />
         </ListItem>
     
     ))}
    </List>
  );
};
