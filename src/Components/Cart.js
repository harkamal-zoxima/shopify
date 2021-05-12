import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Cart.css";
import UpdatedComp from "../Hoc/withCounter";

function Cart(props) {
  const { path } = useParams();

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {path && path == "1" ? (
          <>
            <div style={{ display: "flex" }}>
              <img className="imgSize" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10339513/2019/8/23/b5abcbed-8790-4340-913f-7c1056cd085f1566550643299-Denver-Black-Code-and-Victor-Deo-Combo-Pack-of-2-33615665506-1.jpg" />
            </div>
            <div style={{ width: "400px",fontSize:"0.8rem",paddingTop:"20px" }}>
              <h2 className="title">Denver Men Sporting Club Victor & Black Code Deodorants</h2>
              
              <div>
                <h3 className="mt-10"> ₹499</h3>
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
              <h2>Total: ₹{props.count*499}</h2>

              
            </div>
          </>
        ) : (
          ""
        )}
        {path && path == "2" ? (
          <>
            <div style={{ display: "flex" }}>
              <img className="imgSize" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1830292/2017/3/29/11490773328208-Calvin-Klein-Women-Perfume-and-Body-Mist-7401490773328230-1.jpg" />
            </div>
            <div style={{ width: "400px",paddingTop:"20px",fontSize:"0.8em"}}>
              <h2 >Calvin Klein Eternity Now For Women Eau De Parfum</h2>
              
              <div>
                <h3 className="mt-10"> ₹1299</h3>
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
              <h2>Total: ₹{props.count*1299}</h2>
            </div>
          </>
        ) : (
          ""
        )}
        {path && path == "3" ? (
          <>
            <div style={{ display: "flex" }}>
              <img className="imgSize" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10893344/2019/11/25/b6e45505-0829-4f6a-a0ce-e4297a97a6621574666084781-Tommy-Hilfiger-TOMMY-NOW-Eau-de-Toilette-100-ml-912157466608-1.jpg" />
            </div>
            <div style={{ width: "400px",paddingTop:"20px",fontSize:"0.8rem"}}>
              <h2>Tommy Hilfiger Deodorants</h2>
              
              <div>
                <h3 className="mt-10"> ₹2999</h3>
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
              <h2>Total: ₹{props.count*2999}</h2>
            </div>
          </>
        ) : (
          ""
        )}
        {path && path == "4" ? (
          <>
            <div style={{ display: "flex" }}>
              <img className="imgSize" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/43113/2019/1/25/5394e5e4-2039-4a78-a76d-4fa4289dd96c1548408494036-JAGUAR-Men-Classic-Black-Eau-De-Toilette-100-ml-825154840849-1.jpg" />
            </div>
            <div style={{ width: "400px",paddingTop:"20px",fontSize:"0.8rem"}}>
              <h2>Jaguar Classic Black Eau De Toilette, 100 ml</h2>
              
              <div>
                <h3 className="mt-10"> ₹1499</h3>
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
              <h2>Total: ₹{props.count*1499}</h2>
            </div>
          </>
        ) : (
          ""
        )}
        {path && path == "5" ? (
          <>
            <div style={{ display: "flex" }}>
              <img className="imgSize" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11846244/2020/9/1/70d4fab7-d46a-40cb-9b88-45226e96fa821598976979286-THE-MAN-COMPANY-Men-Perfume-EDT-50-ml-7851598976978540-2.jpg" />
            </div>
            <div style={{ width: "400px",paddingTop:"20px",fontSize:"0.8rem"}}>
              <h2>
                THE MAN COMPANY Body Perfume Trio (Blanc, Rouge and Bleu )
              </h2>
              
              <div>
                <h3 className="mt-10"> ₹4999</h3>
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
              <h2>Total: ₹{props.count*4999}</h2>
            </div>
          </>
        ) : (
          ""
        )}
        {path && path == "6" ? (
          <>
            <div style={{ display: "flex" }}>
              <img className="imgSize" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/93077/2020/6/19/2850bacd-002f-4985-9635-6b7d495d22101592559876525-DAVIDOFF-Men-Cool-Water-Mild-Deodorant-Doux-241592559876209-1.jpg" />
            </div>
            <div style={{ width: "400px",paddingTop:"20px",fontSize:"0.8rem"}}>
              <h2>DAVIDOFF Cool Water Eau de Toilette Man 125ml</h2>
              
              <div>
                <h3 className="mt-10"> ₹2699</h3>
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
              <h2>Total: ₹{props.count*2699}</h2>
            </div>
          </>
        ) : (
          ""
        )}
        {path && path == "7" ? (
          <>
            <div style={{ display: "flex" }}>
              <img className="imgSize" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2018/11/24/6defa6b9-4b5b-440d-90a5-053ddc7f39371543028521322-1.jpg" />
            </div>
            <div style={{ width: "400px",paddingTop:"20px",fontSize:"0.8rem"}}>
              <h2 >Calvin Klein One Unisex EDT, 200ml</h2>
              
              <div>
                <h3 className="mt-10"> ₹2999</h3>
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
              <h2>Total: ₹{props.count*2999}</h2>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default UpdatedComp(Cart);
