import Header from './Header/Header';
import Main from './main/main';
import Gauche from './main-container-gauche/gauche';
import Milieu from './main-container-milieu/Milieu';
import { Fragment } from 'react';



function App() {
  return (
    <Fragment>
    <Header/><Main/><Milieu/>
</Fragment>
  );
}
export default App;



