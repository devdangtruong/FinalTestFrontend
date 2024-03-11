import React, { useEffect, useState } from "react";
import "./styles.css";
import List from "../List";
import InformationFilm from "../InformationFilm";
import axios from "axios";
function Home() {
  const [pages, setPages] = useState("list");
  const [list, setList] = useState([]);
  const [indentify, setIndentify] = useState();
  const [search, setSearch] = useState();
  useEffect(function () {
    axios
      .get(process.env.REACT_APP_BACKEND_DATA)
      .then((res) => {
        setList(res.data);
        console.log(res);
      })
      .catch((err) => err);
  }, []);
  const toPageList = () => {
    setPages("list");
  };
  const showInformationFilm = list.filter((info) => info._id === indentify);

  const searchByName = () => {
    const searchName = list.filter((info) =>
      info.name.toLowerCase().includes(search.toLowerCase())
    );
    setList(searchName);
  };
  console.log(showInformationFilm);
  const toPageInformations = (_id) => {
    setPages("informations");
    setIndentify(_id);
  };
  return (
    <div className="home">
      {pages === "list" ? (
        <List
          toPageInformations={toPageInformations}
          list={list}
          searchByName={searchByName}
          setSearch={setSearch}
        />
      ) : (
        <InformationFilm
          toPageList={toPageList}
          list={list}
          showInformationFilm={showInformationFilm}
        />
      )}
    </div>
  );
}

export default Home;
