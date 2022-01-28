import Stories from '../Components/Stories';

const Milieu = () => {

    return (
        <div>
<div class="milieu">
    
    <Stories></Stories>

    <form class="creationpost">
        <div class="profil">
            <img src="./images/julie.jpg" alt=""/>
        </div>
        <input type="text" placeholder="Qu'avez vous à nous raconter Julie ?"/>
        <input type="submit" value="Poster" class="btn btn-primary"/>
    </form>


    <div class="publications">

        <div class="publication">
            <div class="head">
                <div class="utilisateur">
                    <div class="profil">
                        <img src="./images/mathys.jpg" alt=""/>
                    </div>
                    <div class="ingo">
                        <h3>Mathys Huv</h3>
                        <small>Nice, Il y a 18 minutes</small>
                    </div>

                </div>
                <span class="edit">
                    <i class="fas fa-ellipsis-h"></i>
                </span>
            </div>
            <div class="photos">
                <img class="photopublication" src="./images/friends.jpg" alt=""/>
            </div>

            <div class="boutons-action">
                <div class="boutons-interaction">
                    <span> <i class="fas fa-thumbs-up"></i></span>
                    <span><i class="fas fa-comment-dots"></i></span>
                    <span></span>
                </div>

                <div class="partager">
                    <span><i class="fas fa-share-alt"></i></span>
                </div>
            </div>

            <div class="aimepar">
                <span><img src="./images/julie.jpg" alt=""/></span>
                <span><img src="./images/quentin.jpg" alt=""/></span>
                <span><img src="./images/julien.jpg" alt=""/></span>
                <p>Aimé par <b>Julie Foucal</b>et 25 autres personnes</p>
            </div>

            <div class="text-muted">Voir tout les commentaires

            </div>
        </div>
    </div>
  

    <div class="publication">
        <div class="head">
            <div class="utilisateur">
                <div class="profil">
                    <img src="./images/julien.jpg" alt=""/>
                </div>
                <div class="ingo">
                    <h3>Julien Loo</h3>
                    <small>Fréjus, Il y a 1 jour</small>
                </div>

            </div>
            <span class="edit">
                <i class="fas fa-ellipsis-h"></i>
            </span>
        </div>
        <div class="photos">
            <img class="photopublication" src="./images/airsoft.jpg" alt=""/>
        </div>

        <div class="boutons-action">
            <div class="boutons-interaction">
                <span> <i class="fas fa-thumbs-up"></i></span>
                <span><i class="fas fa-comment-dots"></i></span>
                <span></span>
            </div>

            <div class="partager">
                <span><i class="fas fa-share-alt"></i></span>
            </div>
        </div>

        <div class="aimepar">
            <span><img src="./images/mathys.jpg" alt=""/></span>
            <span><img src="./images/quentin.jpg" alt=""/></span>
            <span><img src="./images/julie.jpg" alt=""/></span>
            <p>Aimé par <b>Mathys Huv</b>et 39 autres personnes</p>
        </div>

        <div class="text-muted">Voir tout les commentaires

        </div>
    </div>
   
    <div class="publication">
        <div class="head">
            <div class="utilisateur">
                <div class="profil">
                    <img src="./images/quentin.jpg" alt=""/>
                </div>
                <div class="ingo">
                    <h3>Quentin Lazz</h3>
                    <small>Fréjus, Il y a 1 jour</small>
                </div>

            </div>
            <span class="edit">
                <i class="fas fa-ellipsis-h"></i>
            </span>
        </div>
        <div class="photos">
            <img class="photopublication" src="./images/woman.jpg" alt=""/>
        </div>

        <div class="boutons-action">
            <div class="boutons-interaction">
                <span> <i class="fas fa-thumbs-up"></i></span>
                <span><i class="fas fa-comment-dots"></i></span>
                <span></span>
            </div>

            <div class="partager">
                <span><i class="fas fa-share-alt"></i></span>
            </div>
        </div>

        <div class="aimepar">
            <span><img class="spanphoto" src="./images/julie.jpg" alt=""/></span>
            <span><img class="spanphoto" src="./images/quentin.jpg" alt=""/></span>
            <span><img class="spanphoto" src="./images/julien.jpg" alt=""/></span>
            <p>Aimé par <b>Julie Foucal </b>et 39 autres personnes</p>
        </div>

        <div class="text-muted">Voir tout les commentaires

        </div>
    </div>
    </div>

</div>
)
}

export default Milieu;