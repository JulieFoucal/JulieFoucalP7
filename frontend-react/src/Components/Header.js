
const Header = () => {
    return (
            <nav>
            <div className="container">
                <h2 className="logogroupomania">
                    <img className="logo" src="./images/logo.png" alt=""/>
                </h2>
        
                <div className="barrederecherche">
                    <i className="fas fa-search"></i>
                    <input type="recherche" placeholder="Barre de recherche pour les utilisateurs"/>
                </div>
    
                    <label className="btn btn-primary" htmlFor="creerunpost">Créer</label>
                    <div className="profil">
                        <img className="img" src="./images/julie.jpg" alt=""/>
                    </div>
                </div>    
        </nav>
    );
}

export default Header;