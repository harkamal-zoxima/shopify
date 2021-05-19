import React, { useEffect, useState } from "react";
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
import { Conditions } from "./Conditions";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/actions/productActions";
import {addToBasket} from '../redux/actions/cartActions'
import axios from "axios";

function Home() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  // console.log(products);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    dispatch(setProduct(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);


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

  return (
    <>
      <div className="sliderDiv">
        <Slider {...settings}>
          <div>
            <img src={banner} style={{ width: "100%" }} alt="no img" />
          </div>
          <div>
            <img src={banner4} style={{ width: "100%" }} alt="no img" />
          </div>
          <div>
            <img src={banner3} style={{ width: "100%" }} alt="no img" />
          </div>
          <div>
            <img src={banner2} style={{ width: "100%" }} alt="no img" />
          </div>
        </Slider>
      </div>

      <div className="productDiv">
        {products.map((item) => {
          return (
            <div className="outerDiv">
              <img className="homeImage" src={item.image} />
              <p className="titlePro">{item.title}</p>
              <h3 className="price">${item.price}</h3>
              <button onClick={()=>dispatch(addToBasket(item))} className="cartButtons addtocart">Add to Cart</button>
            </div>
          );
        })}
      </div>

      <Conditions open={isOpen} onClose={() => setIsOpen(false)} />

      <Footer />
    </>
  );
}

export default Home;
