import React from "react";
import ThirdComponent from "./ThirdComponent";

function FirstComponent(props){
    return <div>
        Hello {props.name} age is {props.age}
    </div>
}


export default FirstComponent