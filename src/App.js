import AllPokemon from './containers/AllPokemon';
import Pokemon from './components/Pokemon';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <h1 className='primary-heading'>Personal Pokedex!</h1>
        <Switch>
          <Route path='/show' component={Pokemon} />
          <Route path='/' component={AllPokemon} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
