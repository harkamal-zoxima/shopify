import React, { useState } from "react";
import "./Home.css";
import banner from "../Assets/banner.jpg";
import banner2 from "../Assets/banner2.jpg";
import banner3 from "../Assets/banner3.jpg";
import banner4 from "../Assets/banner4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Conditions from './Conditions'

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
  };

  const [isOpen, setIsOpen] = useState(true);

  {/* IIFE example */}

  (()=>{
    console.log("IIFE workingg");
  })();

  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <Slider {...settings}>
          <div>
            <img
              src={banner}
              style={{ height: "420px", width: "100%" }}
              alt="no img"
            />
          </div>
          <div>
            <img
              src={banner4}
              style={{ height: "420px", width: "100%" }}
              alt="no img"
            />
          </div>
          <div>
            <img
              src={banner3}
              style={{ height: "420px", width: "100%" }}
              alt="no img"
            />
          </div>
          <div>
            <img
              src={banner2}
              style={{ height: "420px", width: "100%" }}
              alt="no img"
            />
          </div>
        </Slider>
      </div>

      <div className="productDiv">
        <div style={{display:"flex",flexDirection:"column"}}>
        <Link to="/product/1">
          <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10339513/2019/8/23/b5abcbed-8790-4340-913f-7c1056cd085f1566550643299-Denver-Black-Code-and-Victor-Deo-Combo-Pack-of-2-33615665506-1.jpg" />
          
        </Link>
        <h4 className="titlePro">Denver Men Sporting Club Victor</h4>
        </div>

        <div style={{display:"flex",flexDirection:"column"}}>
        <Link to="/product/2">
          <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1830292/2017/3/29/11490773328208-Calvin-Klein-Women-Perfume-and-Body-Mist-7401490773328230-1.jpg" />
        </Link>
        <h4 className="titlePro">Calvin Klein Eternity Now</h4>
        </div>

        <div style={{display:"flex",flexDirection:"column"}}>
        <Link to="/product/3">
          <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10893344/2019/11/25/b6e45505-0829-4f6a-a0ce-e4297a97a6621574666084781-Tommy-Hilfiger-TOMMY-NOW-Eau-de-Toilette-100-ml-912157466608-1.jpg" />
        </Link>
        <h4  className="titlePro">Tommy Hilfiger Deodorants</h4>
        </div>

        <div style={{display:"flex",flexDirection:"column"}}>
        <Link to="/product/4">
          <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10339513/2019/8/23/b5abcbed-8790-4340-913f-7c1056cd085f1566550643299-Denver-Black-Code-and-Victor-Deo-Combo-Pack-of-2-33615665506-1.jpg" />
        </Link>
        <h4 className="titlePro">Jaguar Classic Black Eau De Toilette</h4>
        </div>

        <div style={{display:"flex",flexDirection:"column"}}>
        <Link to="/product/5">
          <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11846244/2020/9/1/70d4fab7-d46a-40cb-9b88-45226e96fa821598976979286-THE-MAN-COMPANY-Men-Perfume-EDT-50-ml-7851598976978540-2.jpg" />
        </Link>
        <h4 className="titlePro">THE MAN COMPANY Body Perfume</h4>
        </div>

        <div style={{display:"flex",flexDirection:"column"}}>
        <Link to="/product/6">
          <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/93077/2020/6/19/2850bacd-002f-4985-9635-6b7d495d22101592559876525-DAVIDOFF-Men-Cool-Water-Mild-Deodorant-Doux-241592559876209-1.jpg" />
        </Link>
        <h4 className="titlePro">DAVIDOFF Cool Water Eau de Toilette</h4>
        </div>

        <div style={{display:"flex",flexDirection:"column"}}>
        <Link to="/product/7">
          <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2018/11/24/6defa6b9-4b5b-440d-90a5-053ddc7f39371543028521322-1.jpg" />
        </Link>
        <h4 className="titlePro">Calvin Klein One Unisex EDT</h4>
        </div>
      </div>

      <Conditions open={isOpen} onClose={() => setIsOpen(false)}/>

      

      <Footer />
    </>
  );
}

export default Home;
