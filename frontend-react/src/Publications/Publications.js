import {useState} from 'react';

export default function Publications() {

    const [isFormShown,showForm] = useState(false);

    function createForm() {
        console.log(isFormShown);
        showForm(true);
    }

    return (       
        <div class="publications"/>
        );
    }