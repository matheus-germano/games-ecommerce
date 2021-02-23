import { NewsContainer, NewsRow, NewsImg, NewsTitle, NewsDescription } from './NewsElements'

const News = ({ title, data}) => {
  return(
    <NewsContainer>
      {data.map((news) => {
        return(
          <NewsRow>
            <NewsImg src={news.img} alt={news.alt}/>
            <NewsTitle>{title}</NewsTitle>
            <NewsDescription></NewsDescription>
          </NewsRow>
        )
      })}
    </NewsContainer>
  )
}

export default News