import {useState} from 'react';

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
        </div>
        </main>


    );
    return dom;
}