const Droite = () => {

    return (
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
        </div>
    )
}

export default Droite;