import React, { useEffect, useState } from "react";

export default function Todoprac() {
  const sort=JSON.parse(localStorage.getItem('user')) || []
  const [data, setdata] = useState({ name: "", email: "" });
  const [list, setlist] = useState(sort);
  const [edit, setedit] = useState(null);

  useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(list))
  },[list])

  function handle(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  function submit() {
    if (edit !== null) {
      const u = [...list];
      u[edit] = data;
      setlist(u);
      setedit(null);
    } else {
      setlist([...list, data]);
    }

    setdata({ name: "", email: "" });
  }
  function del(index) {
    const u = [...list];
    u.splice(index, 1);
    setlist(u);
  }
  function edi(index) {
    setdata(list[index]);
    setedit(index);
  }
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={handle}
        value={data.name}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={handle}
        value={data.email}
      />
      <button onClick={submit}>add</button>
      <ul>
        {list.map((li, index) => (
          <li>
            {li.name} {li.email}
            <button onClick={() => del(index)}>delete</button>
            <button
              onClick={() => {
                edi(index);
              }}
            >
              edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
