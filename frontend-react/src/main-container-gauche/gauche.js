
import {useState} from 'react';

export default function Gauche() {

    const [isFormShown,showForm] = useState(false);

    function createForm() {
        console.log(isFormShown);
        showForm(true);
    }

    let dom = (
        <div class="gauche">
        <div class="messages">
            <div class="heading">
                <h4>Messages</h4><i class="fas fa-edit"></i>
            </div>

            {/* <!---Barre de recherche message contact début--> */}
            <div class="barredereche">
                <i class="fas fa-search"></i>
                <input type="search" placeholder="recherchemessage" id="recherche-message"/>
            </div>
            {/* <!---Barre de recherche message contact fin-->

            <!---Catégorie message début--> */}
            <div class="categorie">
                <h6 class="active">Premier</h6>
                <h6>Génrale</h6>
                <h6 class="message-request">Request (8)</h6>
            </div>
            {/* <!---Catégorie message fin-->

            <!---Contenu message début--> */}
            <div class="message">
                <div class="profil">
                    <img src="./images/julien.jpg" alt=""/>
                    <div class="active"></div>
                </div>
                <div class="message-contenu">
                    <h5>Julien Loo</h5>
                    <p class="text-bold">2 nouveaux messages</p>
                </div>
            </div>
            
            <div class="message">
                <div class="profil">
                    <img src="./images/mathys.jpg" alt=""/>
                </div>
                <div class="message-contenu">
                    <h5>Mathys Huv</h5>
                    <p class="text-bold">Haha excellent !</p>
                </div>
            </div>

            <div class="message">
                <div class="profil">
                    <img src="./images/quentin.jpg" alt=""/>
                    <div class="active"></div>
                </div>
                <div class="message-contenu">
                    <h5>Quentin Lazz</h5>
                    <p class="text-bold">ok !</p>
                </div>
            </div>
   
</div>


{/* <!---Contenu message fin-->

<!---friend request début--> */}
<div class="friend-requests">
    <h4>Request</h4>
    <div class="request">
        <div class="info">
            <div class="profil">
                <img src="./images/honorine.jpg" alt=""/>
            </div>
            <div>
                <h5>Honorine Amb</h5>
                <p class="text-bold">10 amis en communs</p>
            </div>
        </div>
        <div class="action">
            <button class="btn btn-primary">Accept</button>
            <button class="btn">Refuser</button>
        </div>
    </div>
</div>

<div class="friend-requests">
    <h4>Request</h4>
    <div class="request">
        <div class="info">
            <div class="profil">
                <img src="./images/corinne.jpg" alt=""/>
            </div>
            <div>
                <h5>Corine Rob</h5>
                <p class="text-bold">3 amis en communs</p>
                
            </div>
        </div>
        <div class="action">
            <button class="btn btn-primary">Accept</button>
            <button class="btn">Refuser</button>
        </div>
    </div>
</div>
{/* <!---friend request fin--> */}
</div>
// <!---Gauche fin-->
    );
    return dom;
}

