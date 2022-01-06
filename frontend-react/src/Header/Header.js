import {useState} from 'react';

export default function Header() {

    const [isFormShown,showForm] = useState(false);

    function createForm() {
        console.log(isFormShown);
        showForm(true);
    }

    let dom = (
        <nav>
        {/* <!--container début--> */}
        <div className="container">
            {/* <!--logo début--> */}
            <h2 className="logogroupomania">
                <img className="logo" src="./images/icon-above-font.png" alt=""/>
            </h2>
            {/* <!--logo fin--> */}
    
            {/* <!--Barre de recherche début--> */}
            <div className="barrederecherche">
                <i className="fas fa-search"></i>
                <input type="recherche" placeholder="Barre de recherche pour les utilisateurs"/>
            </div>
            {/* <!--Barre de recherche fin--> */}
    
            {/* <!--create début--> */}
            <div className="creationpost" onClick={createForm}>
                <label className="btn btn-primary" htmlFor="creerunpost">Créer</label>
                <div className="profil">
                    <img className="img" src="./images/julie.jpg" alt=""/>
                </div>
            </div>
            {/* <!--create fin--> */}
        </div>
        {/* <!--container fin--> */}
        <div className={isFormShown ? '' : 'hide'}>
            creer compte
        </div>
    </nav>
    );
    return dom;
}