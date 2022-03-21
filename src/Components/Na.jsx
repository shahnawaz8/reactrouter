import { Link } from "react-router-dom"
import './Na.css'
export const  Na = ()=>{
    return(
        <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-evenly"
        }} className="navNa">
        
        <Link to={"/home"}>Home</Link> 
        <Link to={"/Product"}>Product</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/servic"}>servic</Link>
        </div>
        
    );
}