import React from "react";
import ReactDOM from "react-dom";
import './Conditions.css'

export function Conditions({open,onClose}) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div>
      <div className="outermostDiv">
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

export function AddToCart({ open, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div>
      <div style={{position: "fixed",top: "12%",left: "85%",transform: "translate(-50%, -50%)",backgroundColor: "#FBD1D2",padding: "10px",zIndex: 1000,height: "25px",width:"250px",borderRadius:"10px"}}>
        <div style={{display:"flex"}}>
          <h3 style={{marginTop:"-1px",fontSize:"16px"}}>Added To Cart Successfully</h3>
          <button style={{ marginLeft: "25px",height:"15px",width:"15px",backgroundColor:"white",border:"1px solid white",borderRadius:"10px"}} onClick={onClose}>
            <p style={{marginLeft:"-4px",marginTop:"-2px"}}>X</p>
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}




