import React, { useState} from "react";

const Practice = () => {
  const [data, setdata] = useState({ email:'',
  password:''});
  const [list, setlist] = useState([]);
  const [edit, setedit] = useState(null);


  function handle(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  function submit(index) {
    if (edit !== null) {
      const updatelist = [...list];
      updatelist[edit] = data;
      setlist(updatelist);
      setedit(null);
    } else {
      setlist([...list, data]);
    }

    setdata({ email: "", password: "" });
  }
  function del(index) {
    const updatelist = [...list];
    updatelist.splice(index, 1);
    setlist(updatelist);
  }
  function handeledit(index) {
    setdata(list[index]);
    setedit(index);
  }
  return (
    <div>
      <input
        type="text"
        name="email"
        value={data.email}
        placeholder="email"
        onChange={handle}
      />
      <input
        type="text"
        name="password"
        value={data.password}
        placeholder="password"
        onChange={handle}
      />
      <button onClick={submit}>add</button>
      <ul>
        {list.map((li, index) => (
          <li>
            {li.email}-{li.password}
            <button onClick={() => handeledit(index)}>edit</button>
            <button onClick={() => del(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Practice;


