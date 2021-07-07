import './App.css';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import Home from './pages/homepage'

function App() {
  return (
      <BrowserRouter basename={'/'} forceRefresh={true}>
        <Switch>
            <Route path={"/"} component={Home} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
