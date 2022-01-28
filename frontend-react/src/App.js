import Header from './Components/Header';
import Droite from './Components/Droite';
import Milieu from './Components/Milieu';
import Gauche from './Components/Gauche';
import Friendrequests from './Components/Friendrequests';
import Profil from './Components/Profil/Profil';
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
<main>
  <div class="container">
      <Profil></Profil>
  </div>
</main>
</Fragment>
  );
}
export default App;



