import React, { useState } from "react";
import axios from "axios";
const Help = () => {
  const [data, Setdata] = useState([]);
  axios
    .get("http://localhost:3001/help")
    .then((res) => {
      Setdata(res.data);
    })
    .catch((err) => console.log(err));
  return (
    <>
      <h2>출력해보자</h2>
      <h5>{data}</h5>
    </>
  );
};

export default Help;
