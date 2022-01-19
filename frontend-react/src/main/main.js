import {useState} from 'react';
import Gauche from '../main-container-gauche/gauche';


export default function Main() {

    const [isFormShown,showForm] = useState(false);

    function createForm() {
        console.log(isFormShown);
        showForm(true);
    }

    let dom = (
        // <!---Main début-->
    <main>
        <div class="container">
            <Gauche/>
        </div>
        </main>


    );
    return dom;
}