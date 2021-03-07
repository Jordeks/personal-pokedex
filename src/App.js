import AllPokemon from './containers/AllPokemon';
import Pokemon from './components/Pokemon';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <h1 className='primary-heading'>Personal Pokedex!</h1>
        <AllPokemon />
        <Route path='/show' component={Pokemon}>
          <Pokemon />
        </Route>
      </Router>
    </div>
  );
};

export default App;
