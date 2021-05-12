import React from "react";
import ReactDOM from "react-dom";

function AddToCart({open,onClose}) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div>
      <div style={{position: "fixed",top: "93%",left: "87%",transform: "translate(-50%, -50%)",backgroundColor: "rgb(228 228 228)",padding: "10px",zIndex: 1000,height: "38px",width:"376px",borderRadius:"10px",borderTopRightRadius:"0px",borderBottomRightRadius:"0px"}}>
        <div style={{display:"flex"}}>
          <p style={{fontSize:"14px",fontWeight:"500"}}>Disclaimer: Pricing and Delivery Date on any product as is reflected on the Platform may due to Covid-19.</p>
          <button style={{ marginLeft: "25px",height:"15px",width:"15px",backgroundColor:"white",border:"1px solid rgb(235 235 235)",borderRadius:"10px"}} onClick={onClose}>
            <p style={{marginLeft:"-4px",marginTop:"-2px"}}>X</p>
          </button>
        </div>
      </div>


    </div>,
    document.getElementById("condition")
  );
}

export default AddToCart;
