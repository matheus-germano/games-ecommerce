import Products from '../../Products'
import News from '../../News'
import { newGames, sonyGames, xboxGames } from '../../Products/data';
import { newsSection } from '../../News/data';

const Home = () => {
  return(
    <>
      <Products heading='Novos Games' data={newGames}/>
      <Products heading='Exclusivos Sony' data={sonyGames}/>
      <Products heading='Exclusivos Xbox' data={xboxGames}/>
      <News title='Spider Man Miles Morales' data={newsSection}/>
    </>
  )
}

export default Home