import React, { useEffect, useState } from 'react';
import { getDatabase, onValue, ref, push, set, remove, update } from "firebase/database";
import { app } from '../Firebase';

const database = getDatabase(app);

export default function Firebasedatabase() {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({
        username: "",
        email: ""
    });
    const [editId, setEditId] = useState(null); 

    useEffect(() => {
        const usersRef = ref(database, 'users/meet');
        onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const userList = Object.entries(data).map(([id, value]) => ({
                    id,
                    ...value
                }));
                setUsers(userList);
            } else {
                setUsers([]);
            }
        });
    }, []);

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

   
    function sendData() {
        if (editId) {
           
            const userRef = ref(database, `users/meet/${editId}`);

            update(userRef, {
                username: form.username,
                email: form.email,
            })
                .then(() => {
                    console.log("update success!!");
                    setForm({ username: "", email: "" });
                    setEditId(null);
                })
                .catch((error) => {
                    console.log(error);
                });

        } else {
           
            const usersRef = ref(database, 'users/meet');
            const newUserRef = push(usersRef);
            set(newUserRef, {
                username: form.username,
                email: form.email,
            })
                .then(() => {
                    console.log("add success!!");
                    setForm({ username: "", email: "" });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    function deleteUser(id) {
        const userRef = ref(database, `users/meet/${id}`);
        remove(userRef)
            .then(() => {
                console.log("delete success!!");
            })
            .catch((error) => {
                console.log(error);
            });
    }


    function editUser(user) {
        setForm({ username: user.username, email: user.email });
        setEditId(user.id);
    }

    return (
        <div>
            <h1>realtime database</h1>

        
            <input
                type="text"
                name="username"
                placeholder="Enter Username"
                value={form.username}
                onChange={handleChange}
            />
            <br /><br />
            <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={handleChange}
            />
            <br /><br />

            <button onClick={sendData}>{editId ? "Update User" : "Add User"}</button>
                <hr />
            <h2>user</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username} - {user.email} &nbsp;
                        <button onClick={() => editUser(user)}>edit</button>
                        <button onClick={() => deleteUser(user.id)}>delete</button><br />
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}