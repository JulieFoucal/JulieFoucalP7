import Header from './Components/Header';
import Droite from './Components/Droite';
import Milieu from './Components/Milieu';
import Gauche from './Components/Gauche';


import { Fragment } from 'react';


function App() {
  return (
    <Fragment>

<Header></Header>
<main>
  <div class="container">
<Gauche></Gauche>
<Milieu></Milieu>
<Droite></Droite>
</div>
</main>
</Fragment>
  );
}
export default App;



