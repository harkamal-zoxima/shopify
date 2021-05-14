import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Product.css";
import UpdatedComp from "../Hoc/withCounter";
import {AddToCart} from "./Conditions";

function Product(props) {
  const { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {id && id == "1" ? (
          <>
            <div style={{ display: "flex" }}>
              <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10339513/2019/8/23/b5abcbed-8790-4340-913f-7c1056cd085f1566550643299-Denver-Black-Code-and-Victor-Deo-Combo-Pack-of-2-33615665506-1.jpg" />
            </div>
            <div style={{ width: "400px", paddingTop: "54px" }}>
              <h2>Denver Men Sporting Club Victor & Black Code Deodorants</h2>
              <p className="mt-10">
                This item is not returnable. Items like outer-wear, personal
                care, make-up, socks and certain accessories do not come under
                our return policy.
              </p>
              <div>
                <h3 className="mt-10"> ₹499</h3>
              </div>

              <button className="addButton" onClick={() => setIsOpen(true)}>
                Add To Cart
              </button>
              <div className="dialogBox">
              <AddToCart open={isOpen} onClose={() => setIsOpen(false)} />
              </div>


              <div className="buttonsDiv">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {id && id == "2" ? (
          <>
            <div style={{ display: "flex" }}>
              <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1830292/2017/3/29/11490773328208-Calvin-Klein-Women-Perfume-and-Body-Mist-7401490773328230-1.jpg" />
            </div>
            <div style={{ width: "400px", paddingTop: "54px" }}>
              <h2>Calvin Klein Eternity Now For Women Eau De Parfum</h2>
              <p className="mt-10">
                This item is not returnable. Items like outer-wear, personal
                care, make-up, socks and certain accessories do not come under
                our return policy.
              </p>
              <div>
                <h3 className="mt-10"> ₹1299</h3>
              </div>

              <button className="addButton" onClick={() => setIsOpen(true)}>
                Add To Cart
              </button>
              <AddToCart open={isOpen} onClose={() => setIsOpen(false)} />

              <div className="buttonsDiv">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {id && id == "3" ? (
          <>
            <div style={{ display: "flex" }}>
              <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10893344/2019/11/25/b6e45505-0829-4f6a-a0ce-e4297a97a6621574666084781-Tommy-Hilfiger-TOMMY-NOW-Eau-de-Toilette-100-ml-912157466608-1.jpg" />
            </div>
            <div style={{ width: "400px", paddingTop: "54px" }}>
              <h2>Tommy Hilfiger Deodorants</h2>
              <p className="mt-10">
                This item is not returnable. Items like outer-wear, personal
                care, make-up, socks and certain accessories do not come under
                our return policy.
              </p>
              <div>
                <h3 className="mt-10"> ₹2999</h3>
              </div>

              <button className="addButton" onClick={() => setIsOpen(true)}>
                Add To Cart
              </button>
              <AddToCart open={isOpen} onClose={() => setIsOpen(false)} />

              <div className="buttonsDiv">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {id && id == "4" ? (
          <>
            <div style={{ display: "flex" }}>
              <img src="https://rukminim1.flixcart.com/image/612/612/kk5rgy80/perfume/g/e/4/scent-beautiful-secret-eau-de-parfum-fogg-women-original-imafzk92ugzy5drh.jpeg?q=70" />
            </div>
            <div style={{ width: "400px", paddingTop: "54px" }}>
              <h2>Jaguar Classic Black Eau De Toilette, 100 ml</h2>
              <p className="mt-10">
                This item is not returnable. Items like outer-wear, personal
                care, make-up, socks and certain accessories do not come under
                our return policy.
              </p>
              <div>
                <h3 className="mt-10"> ₹1499</h3>
              </div>

              <button className="addButton" onClick={() => setIsOpen(true)}>
                Add To Cart
              </button>
              <AddToCart open={isOpen} onClose={() => setIsOpen(false)} />

              <div className="buttonsDiv">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {id && id == "5" ? (
          <>
            <div style={{ display: "flex" }}>
              <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11846244/2020/9/1/70d4fab7-d46a-40cb-9b88-45226e96fa821598976979286-THE-MAN-COMPANY-Men-Perfume-EDT-50-ml-7851598976978540-2.jpg" />
            </div>
            <div style={{ width: "400px", paddingTop: "54px" }}>
              <h2>
                THE MAN COMPANY Body Perfume Trio (Blanc, Rouge and Bleu )
              </h2>
              <p className="mt-10">
                This item is not returnable. Items like outer-wear, personal
                care, make-up, socks and certain accessories do not come under
                our return policy.
              </p>
              <div>
                <h3 className="mt-10"> ₹4999</h3>
              </div>

              <button className="addButton" onClick={() => setIsOpen(true)}>
                Add To Cart
              </button>
              <AddToCart open={isOpen} onClose={() => setIsOpen(false)} />

              <div className="buttonsDiv">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {id && id == "6" ? (
          <>
            <div style={{ display: "flex" }}>
              <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/93077/2020/6/19/2850bacd-002f-4985-9635-6b7d495d22101592559876525-DAVIDOFF-Men-Cool-Water-Mild-Deodorant-Doux-241592559876209-1.jpg" />
            </div>
            <div style={{ width: "400px", paddingTop: "54px" }}>
              <h2>DAVIDOFF Cool Water Eau de Toilette Man 125ml</h2>
              <p className="mt-10">
                This item is not returnable. Items like outer-wear, personal
                care, make-up, socks and certain accessories do not come under
                our return policy.
              </p>
              <div>
                <h3 className="mt-10"> ₹2699</h3>
              </div>

              <button className="addButton" onClick={() => setIsOpen(true)}>
                Add To Cart
              </button>
              <AddToCart open={isOpen} onClose={() => setIsOpen(false)} />

              <div className="buttonsDiv">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {id && id == "7" ? (
          <>
            <div style={{ display: "flex" }}>
              <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2018/11/24/6defa6b9-4b5b-440d-90a5-053ddc7f39371543028521322-1.jpg" />
            </div>
            <div style={{ width: "400px", paddingTop: "54px" }}>
              <h2>Calvin Klein One Unisex EDT, 200ml</h2>
              <p className="mt-10">
                This item is not returnable. Items like outer-wear, personal
                care, make-up, socks and certain accessories do not come under
                our return policy.
              </p>
              <div>
                <h3 className="mt-10"> ₹2999</h3>
              </div>

              <button className="addButton" onClick={() => setIsOpen(true)}>
                Add To Cart
              </button>
              <AddToCart open={isOpen} onClose={() => setIsOpen(false)} />

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
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default UpdatedComp(Product);
