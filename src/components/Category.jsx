import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Category() {
  const [product, setProduct] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const info = await axios.get(`http://localhost:3000/${category}`);
    setProduct(info.data);
  };

  return (
    <div>
      {product.map((el, i) => {
        return (
          <>
            <Link to={`/${el.category}/${el.id}`}>
            <img
                src={el.img}
                style={{ width: "150px", height: "150px" }}
              />
            </Link>
            <h3>{el.price}</h3>
            <h3>{el.name}</h3>

          </>
        );
      })}
    </div>
  );
}
