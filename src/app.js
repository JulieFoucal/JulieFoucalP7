import './App.css';

import Login from './routes/Login';
import Register from './routes/Register';
import Main from './routes/Main';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// authentification
// register
// affichage des messages
// envoi de message
// affichage des commentaires
// envoi de commentaire
//
// partager l'état des composant entre eux
// fetch => asynchrone (pagination)

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
