import { useState } from 'react';

export default () => {
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [tel, setTel] = useState('');
    let createAccount = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(pwd);
        console.log(tel);
    };

    return (
        <div>
            <form>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <input type="password" id="password" value={pwd} onChange={(e) => setPwd(e.target.value)}></input>
                <input type="tel" id="tel" value={tel} onChange={(e) => setTel(e.target.value)}></input>
                <button onSubmit={createAccount}>Creer un compte</button>
            </form>
        </div>       
    );

}