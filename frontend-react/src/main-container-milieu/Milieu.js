
import {useState} from 'react';

export default function Milieu() {

    const [isFormShown,showForm] = useState(false);

    function createForm() {
        console.log(isFormShown);
        showForm(true);
    }

    let dom = (
<div class="milieu">

</div>
    );
    return dom;
}



