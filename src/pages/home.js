import React, {Component} from 'react';

class Home extends React.Component{
render(){
    return(
        <div>
            <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>GROUPOMANIA reseau social</title>

    {/* <!--Icon scoout cdn--> */}
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.6/css/unicons.css"/>

    {/* <!--Css--> */}
    <link rel="stylesheet" href="./Css/style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

</head>

<body>
    <nav>
        {/* <!--container début--> */}
        <div class="container">
            {/* <!--logo début--> */}
            <h2 class="logogroupomania">
                <img class="logo" src="./images/icon-above-font.png" alt=""/>
            </h2>
            {/* <!--logo fin--> */}

            {/* <!--Barre de recherche début--> */}
            <div class="barrederecherche">
                <i class="fas fa-search"></i>
                <input type="recherche" placeholder="Barre de recherche pour les utilisateurs"/>
            </div>
            {/* <!--Barre de recherche fin--> */}

            {/* <!--create début--> */}
            <div class="creationpost">
                <label class="btn btn-primary" for="creerunpost">Créer</label>
                <div class="profil">
                    <img class="img" src="./images/julie.jpg" alt=""/>
                </div>
            </div>
            {/* <!--create fin--> */}



        </div>
        {/* <!--container fin--> */}

    </nav>

    {/* <!---Main début--> */}
    <main>
        <div class="container"/>

            {/* <!---Gauche début--> */}
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
                    {/* <!---Barre de recherche message contact fin--> */}

                    {/* <!---Catégorie message début--> */}
                    <div class="categorie">
                        <h6 class="active">Premier</h6>
                        <h6>Génrale</h6>
                        <h6 class="message-request">Request (8)</h6>
                    </div>
                    {/* <!---Catégorie message fin--> */}

                    {/* <!---Contenu message début--> */}
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

    
        {/* <!---Contenu message fin--> */}

        {/* <!---friend request début--> */}
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
        {/* <!---Gauche fin--> */}


        {/* <!---Milieu début--> */}
        <div class="milieu">
            {/* <!--Stories à la une début--> */}
            <div class="stories">
                <div class="story">
                    <div class="profil">
                        <img src="./images/julie.jpg" alt=""/>
                    </div>
                    <p class="nom">
                        Votre Story
                    </p>
                </div>

                <div class="story">
                    <div class="profil">
                        <img src="./images/quentin.jpg" alt=""/>
                    </div>
                    <p class="nom">
                        Quentin Lazz
                    </p>
                </div>

                <div class="story">
                    <div class="profil">
                        <img src="./images/julien.jpg" alt=""/>
                    </div>
                    <p class="nom">
                        Julien Loo
                    </p>
                </div>

                <div class="story">
                    <div class="profil">
                        <img src="./images/mathys.jpg" alt=""/>
                    </div>
                    <p class="nom">
                        Mathys Huv
                    </p>
                </div>
            </div>
            {/* <!--Stories à la une fin--> */}

            <form class="creationpost"/>
                <div class="profil">
                    <img src="./images/julie.jpg" alt=""/>
                </div>
                <input type="text" placeholder="Qu'avez vous à nous raconter Julie ?"/>
                <input type="submit" value="Poster" class="btn btn-primary">

            </form>


            <div class="publications">

                {/* <!--Publication 1 début--> */}
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
            {/* <!--Publication 1 fin-->
            <!--Publication 2 début--> */}
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
            {/* <!--Publication 2 fin--> */}
            {/* <!--Publication 2 début--> */}
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

            {/* <!--Publication 2 fin--> */}

        </div>
        {/* <!---Milieu fin--> */}

        {/* <!---Droite début--> */}
        <div class="droite">
            <a class="profils">
                <div class="profil">
                    <img src="./images/julie.jpg" alt=""/>
                </div>

                <div class="handle">
                    <h4>Julie Foucal</h4>
                    <p class="text-muted">
                        @juliefoucal
                    </p>
                </div>
            </a>


            {/* <!--Side bar début--> */}
            <div class="sidebar">
                <a href="" class="menu-item active">
                    <span>
                        <i class="fas fa-home"></i>
                        <h3>Home</h3>
                    </span>
                </a>

                <a href="" class="menu-item notifications">
                    <span>
                        <i class="fas fa-bell"><small class="notification-count">5+</small></i>
                        <h3>Notifications</h3>
                    </span>

                    {/* <!--pop up début--> */}
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
                    {/* <!--pop up fin--> */}

                </a>

                <a href="" class="menu-item">
                    <span>
                        <i class="fab fa-wpexplorer"></i>
                        <h3>Explore</h3>
                    </span>
                </a>

                <a href="" class="menu-item">
                    <span>
                        <i class="far fa-envelope message-notification"></i>
                        <h3>Messages</h3>
                    </span>
                </a>

                <a href="" class="menu-item">
                    <span>
                        <i class="fas fa-palette"></i>
                        <h3>Theme</h3>
                    </span>
                </a>

                <a href="" class="menu-item active">
                    <span>
                        <i class="fas fa-tools"></i>
                        <h3>Settings</h3>
                    </span>
                </a>

                <input type="text" value="Créer" class="btn btn-primary"/>
            </div>
            {/* <!--Side bar fin--> */}
        </div>
        {/* <!---Droite fin--> */}
        </div>


    </main>
    {/* <!---Main fin--> */}


</body>
        </div>
    )
}
}
export default Home;