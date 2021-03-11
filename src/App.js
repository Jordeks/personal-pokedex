import AllPokemon from './containers/AllPokemon';
import Pokemon from './components/Pokemon';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <h1 className='primary-heading'>Personal Pokedex!</h1>
        <NavLink to='/login' >Log in</NavLink>
        <Switch>
          <Route path='/pokemon/:id' component={Pokemon} />
          <Route path='/login' component={Login} />
          <Route path='/' component={AllPokemon} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
