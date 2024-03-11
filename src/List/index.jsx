import React, { useState } from "react";
import Item from "./Item";
import { IoMenu, IoSearchOutline } from "react-icons/io5";
import logo from "../Image/movie-ui-high-resolution-logo-black-transparent.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function List(props) {
  const nameItem = (e) => {
    props.setSearch(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <IoMenu />
        <img src={logo} alt="" style={{ width: "50px" }} />
        <div>
          <input
            type="text"
            style={{ borderRadius: "5px" }}
            onChange={nameItem}
          />
          <IoSearchOutline onClick={props.searchByName} />
        </div>
      </div>
      <h1>Most Popular Movies</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {props.list.map((item) => (
          <button
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              justifyContent: "center",
              border: "none",
              background: "none",
            }}
            onClick={() => props.toPageInformations(item._id)}
            key={item._id}
          >
            <Item item={item} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default List;
