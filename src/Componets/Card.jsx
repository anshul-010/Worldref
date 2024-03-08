import React, { useContext } from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import { MyContext } from "../Context/MyContextProvider ";
export const Card = ({ item }) => {
  const { isAuth } = useContext(MyContext);

  return (
    <div className="cart">
      <div className="image">
        <img src={item.img} alt="not found" />
      </div>
      <div className="details-info">
      
      <div className="brand">{item.brand}</div>
      <div className="price">
        <h3>{item.price}</h3>
        <p>onword</p>
      </div>
      <div className="delivery">Free Delivery</div>
      <div>
        <div
          className="rating"
          style={{
            backgroundColor:
              item.rating <= 2.9
                ? "red"
                : item.rating > 3.0 && item.rating > 3.9
                ? "rgb(56, 240, 56)"
                : "#fbea03",
          }}
        >
          {item.rating}{" "}
          <img
            width={25}
            height={15}
            src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg"
            alt="not"
          />{" "}
        </div>
      </div>
      </div>
      <div className="details-deals">
        <button className="details">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`detail/${item.id}`}
          >
            Check Details
          </Link>
        </button>
        {isAuth && <button className="deals" onClick={()=>alert("Item Added")}>Add to Deals</button>}
      </div>
    </div>
  );
};
