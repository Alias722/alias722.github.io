import './App.css';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import Home from './pages/homepage'
import Blogger from './pages/blogger'
import NotFound from './pages/notfound'

function App() {
  return (
      <BrowserRouter basename={'/'} forceRefresh={true}>
        <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/posts"} component={Blogger}/>
            <Route path={"/:param"} component={NotFound}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
