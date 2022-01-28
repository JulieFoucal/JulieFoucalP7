const Gauche = () => {

return(
    
    <div class="gauche">
        <div class="messages">
            <div class="heading">
                <h4>Messages</h4><i class="fas fa-edit"></i>
            </div>

            <div class="barredereche">
                <i class="fas fa-search"></i>
                <input type="search" placeholder="recherchemessage" id="recherche-message"/>
            </div>

            <div class="categorie">
                <h6 class="active">Premier</h6>
                <h6>Génrale</h6>
                <h6 class="message-request">Request (8)</h6>
            </div>

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

</div>

)


}

export default Gauche;

