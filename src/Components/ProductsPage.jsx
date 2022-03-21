import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductsPage = () => {
  const [Allproducs,setAllproducts] = useState([{name:"p1",price:"23",id:1}])
  useEffect(()=>{
    axios.get("http://localhost:3002/products").then((res)=>{
        setAllproducts(res.data);
        console.log(res)
      })
  },[])
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 35%)",
          justifyContent: "space-evenly",
          width: "500px",
          margin: "auto",
          paddingTop: "50px",
        }}
      >
        <h4>Product Name</h4>
        <h4>Price</h4>
        <h4>Details</h4>
      </div>
      {Allproducs.map((el) => {
        return (
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 35%)",
              justifyContent: "space-evenly",
              width: "500px",
              margin: "auto",
              paddingTop: "10px",
            }}
          >
            <div className="name">{el.name}</div>
            <div className="price">{el.price}</div>
            <Link to={`/products/${el.id}`}>more details</Link>
          
          </div>
        );
      })}
    </>
  );
};
