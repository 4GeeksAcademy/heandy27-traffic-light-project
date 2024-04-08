import React, {useState} from "react";
import { act } from "react-dom/test-utils";


const Traffic = ({green, yellow, red}) => {


    const [active, setActive] = useState(null)


    const handleClick = (boton) => {
        if (active === boton) {
            setActive(null);
        } else {
            setActive(boton);
        }
      };

    let shadow = " white-shadow ";


    return (

        <div className="container d-flex justify-content-center">
            <div className="body  bg-dark rounded " >
            <div className="d-flex flex-column">
                <div className="circles mx-2 my-2 d-flex flex-column">
                 <button type="button" className={`bg-danger rounded-circle border-0 ${active == "boton1" ? shadow : ""}`} style={{height: "100px", width: "100px"}} onClick={()=>{
                    handleClick("boton1")
                }}>{red}</button>


               <button type="button" className={`bg-warning rounded-circle border-0 ${active == "boton2" ? shadow : ""}`} style={{height: "100px", width: "100px"}} onClick={()=>{
                    handleClick("boton2")
                }}>{red}</button>
                
                
                <button type="button" className={`bg-success rounded-circle border-0 ${active == "boton3" ? shadow : ""}`} style={{height: "100px", width: "100px"}} onClick={()=>{
                    handleClick("boton3")
                }}>{red}</button>

            
             
              
             
                </div>
                </div>
            </div>
        </div>


    );
}

export default Traffic;