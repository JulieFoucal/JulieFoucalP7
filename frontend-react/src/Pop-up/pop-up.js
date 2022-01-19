import {useState} from 'react';

export default function Popup() {

    const [isFormShown,showForm] = useState(false);

    function createForm() {
        console.log(isFormShown);
        showForm(true);
    }

    return (
        <div class="popup">
        <div>
            <div class="profil">
                <img src="./images/julie.jpg" alt=""/>
            </div>
            <div class="notificationbody">
                <b>Mathys Huv</b> a commenté votre post
                <small class="text-muted">IL Y A 1 JOUR</small>
            </div>
        </div>
        <div>
            <div class="profil">
                <img src="./images/quentin.jpg" alt=""/>
            </div>
            <div class="notificationbody">
                <b>Quentin Lazz</b> a partagé votre photo
                <small class="text-muted">IL Y A 4 MINUTES</small>
            </div>
        </div>
        <div>
            <div class="profil">
                <img src="./images/julien.jpg" alt=""/>
            </div>
            <div class="notificationbody">
                <b>Julien Loo</b> a aimé votre photo
                <small class="text-muted">IL Y A 34 MINUTES</small>
            </div>
        </div>
    </div>
        );
    

    }