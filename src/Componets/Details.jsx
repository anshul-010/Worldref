import React, { useContext, useEffect, useState } from "react";
import data from "../db.json";
import { Link, useParams } from "react-router-dom";
import "../Styles/Details.css";
import "../Styles/Home.css";
import { MyContext } from "../Context/MyContextProvider ";

export const Details = () => {
  const [products] = useState(data.Products);
  const [singleItem, setSingleItem] = useState("");
  const { id } = useParams();
  const {isAuth,setIsAuth} = useContext(MyContext)

  useEffect(() => {
    let item = products.find((ele) => ele.id == id);
    setSingleItem(item);
    console.log(singleItem);
  });

  function handleLogout(){
    setIsAuth(false)
  }


  return (
    <>
      <div className="heading">
        <Link to="/" style={{textDecoration:"none"}}><h1 className="heading-text">Home</h1></Link>
        <h1 onClick={handleLogout} className="heading-text">
          {isAuth ? "Logout" : "Login"}
        </h1>
      </div>
      <div className="d-main">
        <div className="d-img-div">
          <img src={singleItem.img} alt="" />
        </div>
        <div className="d-info">
          <h2>Brand: {singleItem.brand}</h2>
          <h2>Description: {singleItem.description}</h2>
          <h2>Price: {singleItem.price}</h2>

          <div
            className="rating"
            style={{
              backgroundColor:
                singleItem.rating <= 2.9
                  ? "red"
                  : singleItem.rating > 3.0 && singleItem.rating > 3.9
                  ? "rgb(56, 240, 56)"
                  : "#fbea03",
            }}
          >
            {singleItem.rating}{" "}
            <img
              width={25}
              height={15}
              src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg"
              alt="not"
            />{" "}
          </div>
          <div className="d-btn">
            <button>Add to deals</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
    </>
  );
};
