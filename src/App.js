import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home';
import { GlobalStyle } from './globalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
