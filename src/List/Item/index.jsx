import React from "react";

function Item(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <img src={props.item.image} alt="" style={{ width: "100px" }} />
      <span style={{ fontWeight: "bold", fontSize: "13px" }}>
        {props.item.name}
      </span>
      <span>
        {props.item.time} min {props.item.year}
      </span>
    </div>
  );
}

export default Item;
