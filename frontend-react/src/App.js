import Header from './Components/Header';
import Droite from './Components/Droite';
import Milieu from './Components/Milieu';
import Gauche from './Components/Gauche';
import Friendrequests from './Components/Friendrequests';
import Stories from './Components/Stories';


import { Fragment } from 'react';


function App() {
  return (
    <Fragment>

<Header></Header>
<main>
  <div class="container">
<Gauche>
  <Friendrequests></Friendrequests>
</Gauche>


<Milieu>
  <div class="stories">
  <Stories></Stories></div>
</Milieu>

<Droite></Droite>
</div>
</main>
</Fragment>
  );
}
export default App;



