import styled, {css} from 'styled-components'

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  padding: 5rem calc((100vw - 1300px) / 2);

  color: #333;
  background-color: #f0f0f7;

  align-items: center;
  justify-content: center;
`;

export const ProductsHeading = styled.h1`
  font-weight: bold;
  font-size: clamp(2rem, 2.5vw, 3rem);

  text-align: center;

  margin: 1rem;
  margin-bottom: 5rem;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  width: 300px;

  margin: 1rem 2rem;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;

  transition: .5s;

  &:hover {
    transform: translateY(-10px);
    transition: .5s;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 1rem;
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

export const ProductButton = styled.button`
  ${props => props.type == 3 
  ? 'color: green; border: 2px solid green;' 
  : props => props.type == 2 
  ? 'color: blue; border: 2px solid blue;' 
  : 'color: #333; border: 2px solid #333;'}

  width: 90%;

  font-weight: bold;

  border-radius: 10px;

  padding: 20px;
  margin: 2rem;

  transition: .3s;

  &:hover {
    ${props => props.type == 3 
    ? 'color: #f0f0f7; background-color: green;' 
    : props => props.type == 2 
    ? 'color: #f0f0f7; background-color: blue;' 
    : 'color: #f0f0f7; background-color: #333;'}

    transition: .3s;

    cursor: pointer;
  }
`;