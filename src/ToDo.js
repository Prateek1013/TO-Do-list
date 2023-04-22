import React from "react";

export default function ToDo(props){
    // const [clicked, setClick]=useState(false);
    return (
    <div >
    <li 
    // onClick={()=>{
    // props.onChecked(props.id);
    // }
    // }
    >
    {props.name} 
    <button onClick={()=>{
    props.onChecked(props.id);
    }}>
       <span> Delete
       </span>
        </button>
     </li>
     </div>
     )
}
