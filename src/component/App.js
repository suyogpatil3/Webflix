
import './App.css';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Header } from './Header';
import { Homepage } from './HomeFolder/Homepage';
import { Watchlist } from './Watch/Watchlist';
import { Watched } from './Watch/Watched';
import { Search} from './SearchFolder/Search';
import {GlobalProvider} from '../context/GlobalStates'
import Details from './MovieDetailsFolder/Details';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div className="App">
      <GlobalProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Homepage/>
          </Route>  
          <Route exact path='/Webflix/watchlist'>
            <Watchlist/>
          </Route>
          <Route exact path="/Webflix">
            <Homepage/>
          </Route>
          <Route path='/Webflix/watched'>
            <Watched/>
          </Route>
          <Route path='/Webflix/add'>
            <Search/>
          </Route>
          <Route path='/Webflix/details'>
            <Details/>
          </Route>
          <Route>
            <Homepage/>
          </Route>
        </Switch>
      </Router>
      </GlobalProvider>
      </div>
  );
}

export default App;
