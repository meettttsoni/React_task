import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Productinfo() {
  const [state, setState] = useState("");
  const { category, id } = useParams();
  console.log(category);

  useEffect(() => {
    fetchApi();
  }, [category]);

  const fetchApi = async () => {
    const info = await axios.get(`http://localhost:3000/${category}/${id}`);
    setState(info.data);
  };

  return (
    <div>
      <img src={state.img} style={{ width: "150px", height: "150px" }} />
    </div>
  );
}
