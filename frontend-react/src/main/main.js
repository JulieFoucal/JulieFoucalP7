import {useState} from 'react';
import Gauche from '../main-container-gauche/gauche';
import Milieu from './main-container-milieu/Milieu';
import Droite from '../main-container-droite/Droite';



export default function Main() {

    const [isFormShown,showForm] = useState(false);

    function createForm() {
        console.log(isFormShown);
        showForm(true);
    }

    ruturn (
    <main>
        <div class="container">
            <Gauche/><Milieu/><Droite/>
        </div>
        </main>
    );
    
}