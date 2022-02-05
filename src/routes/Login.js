import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    let [name,setName] = useState("");
    let [password, setPassword] = useState("");
    let login = (e) => {
        e.preventDefault();
        fetch("http://locahost:10000/user", {
            method:"post",
            mode: "cors",
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name,
                password
            }),
        })
        .then((r) => {
            console.log(r);
        }).catch((r) => {
            console.log(r);
        })
    };
    return (
        <div>
            <form onSubmit={login}>
                <label>Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value) }/>
                <label>Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value) }/>
                <button>Connection</button>
            </form>
            <Link to="/register">Créer un nouvel utilisateur</Link>
        </div>
    );
}
