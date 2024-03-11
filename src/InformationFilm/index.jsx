import React from "react";
import { ImCancelCircle } from "react-icons/im";
function InformationFilm(props) {
  console.log(props);
  return (
    <div>
      <ImCancelCircle onClick={props.toPageList} />

      {props.showInformationFilm.map((item) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            justifyContent: "space-around",
          }}
        >
          <img src={item.image} alt="" style={{ width: "200px" }} />
          <div>
            <h1>{item.name}</h1>
            <span>
              {item.time} min {item.year}
            </span>
            <p>{item.introduce}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InformationFilm;
