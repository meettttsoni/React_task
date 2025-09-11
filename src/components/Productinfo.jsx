import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { myAction } from "./reduxproject/Action";

export default function Productinfo() {
  const [state, setState] = useState("");
  const { category, id } = useParams();
  const dispatch=useDispatch()
  const navigate=useNavigate()
  console.log(category);

  useEffect(() => {
    fetchApi();
  }, [category]);

  const fetchApi = async () => {
    const info = await axios.get(`http://localhost:3000/${category}/${id}`);
    setState(info.data);
  };
  function Addtocart(){
    console.log(state)
    dispatch(myAction(state))

    navigate('/cart')
  }

  return (
    <div>
      <img src={state.img} style={{ width: "150px", height: "150px" }} />
      <button onClick={Addtocart}>ADD TO CART</button>
    </div>
  );
}
