import React, { useRef, useState } from 'react';

export default function Todoref() {
  const nameref = useRef(null);
  const emailref = useRef(null);

  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const name = nameref.current.value;
    const email = emailref.current.value;

    if (name === '' || email === '') {
      alert('Please fill both fields');
      return;
    }

    let updatedData = [...data];

    if (editIndex !== null) {
      updatedData[editIndex] = { name, email };
      setEditIndex(null);
    } else {
      updatedData.push({ name, email });
    }

    setData(updatedData);

    nameref.current.value = '';
    emailref.current.value = '';
  }

  function handleDelete(index) {
    const updated = [...data];
    updated.splice(index, 1);
    setData(updated);
  }

  function handleEdit(index) {
    const item = data[index];
    nameref.current.value = item.name;
    emailref.current.value = item.email;
    setEditIndex(index);
  }

  return (
    <div>
  
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input type="text" ref={nameref} />
        </div>
        <div>
          Email: <input type="text" ref={emailref} />
        </div>
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
      </form>

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            Name: {item.name} | Email: {item.email}
            
            <button onClick={() => handleEdit(index)}>Edit</button>
            &nbsp;
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
