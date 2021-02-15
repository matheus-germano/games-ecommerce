import { BrowserRouter as Router} from 'react-router-dom'
import Products from './components/Products'
import { featureGames, sonyGames, xboxGames } from './components/Products/data';
import { GlobalStyle } from './globalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Products heading='Novidades' data={featureGames}/>
      <Products heading='Exclusivos Sony' data={sonyGames}/>
      <Products heading='Exclusivos Xbox' data={xboxGames}/>
    </Router>
  );
}

export default App;
