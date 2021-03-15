import AllPokemon from './containers/AllPokemon';
import Pokemon from './components/Pokemon';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/pokemon/:id' component={Pokemon} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/' component={AllPokemon} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
