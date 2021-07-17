import './App.css';
import Home from './componets/Home/index'
import {Route,Switch,Redirect} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import About from './componets/About/Index';
import Contect from "./componets/Contect";
import Service from "./componets/Service";
import Navbar from "./componets/Navbar";
function App() {
  return (


    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />

        <Route exact path="/service" component={Service} />
        <Route exact path="/contect" component={Contect} />
                <Route exact path="/contect" component={Contect} />


<Redirect to='/' />

      </Switch>
    </div>
  
  );
}

export default App;
