import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Cart.css";
import UpdatedComp from "../Hoc/withCounter";
import store from "../redux/store/store";

function Cart(props) {
  // const { path } = useParams();

  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    setCartItems(store.getState().cartReducer.basket);
  }, []);

  console.log(cartItems);

  return (
    <div style={{marginLeft:"30%"}}>
      {cartItems?.map((item) => {
        return (
          <div className="outerDivv">
            <div style={{ display: "flex" , margin:"20px",marginLeft:"-10px"}}>
              <img className="imgSize" src={item.item.image} />
            </div>
            <div
              style={{ width: "300px", paddingTop: "20px", fontSize: "0.8rem" }}
            >
              <h2>{item.item.title}</h2>

              <p>{item.item.description}</p>

              <div>
                <h3 className="mt-10">Price: ${item.item.price}</h3>
              </div>

              <div className="buttonsDiv ">
            <button onClick={props.decrementCount} className="cartButtons">
              -
            </button>
            <p className="counter">{props.count}</p>
            <button onClick={props.incrementCount} className="cartButtons">
              +
            </button>
          </div>

          
              
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UpdatedComp(Cart);
