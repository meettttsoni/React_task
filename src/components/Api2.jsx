import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Api2() {
  const [text, setText] = useState({
    id: "",
    name: "",
    price: "",
  });
  const [product, setProduct] = useState([]);
  const [edit, setEditId] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const info = await axios.get("http://localhost:5000/data");
    setProduct(info.data);
  };

  function AddText(e) {
    setText({ ...text, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (edit) {
      // Update
      await axios.put(`http://localhost:5000/data/${edit}`, text);

      setEditId(null);
    } else {
      // Create
      await axios.post("http://localhost:5000/data", text);
    }

    setText({
      id: "",
      name: "",
      price: "",
    });
    fetchApi();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/data/${id}`);
    fetchApi();
  };
  const handleEdit = (item) => {
    setText(item);
    setEditId(item.id);
  };

  return (
    <div>
      <h1>Api</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter id"
          name="id"
          value={text.id}
          onChange={AddText}
        />
        <input
          type="text"
          placeholder="enter name"
          name="name"
          value={text.name}
          onChange={AddText}
        />
        <input
          type="text"
          placeholder="enter price"
          name="price"
          value={text.price}
          onChange={AddText}
        />
        <input type="submit" value={edit ? "Update" : "Add"} />
      </form>

      {product.map((el, i) => (
        <li key={el.id}>
          {el.name} - ₹{el.price}{" "}
          <button onClick={() => handleEdit(el)}>Edit</button>
          <button onClick={() => handleDelete(el.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}
