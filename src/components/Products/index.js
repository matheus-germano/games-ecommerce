import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import { ProductsContainer, ProductsHeading, ProductsWrapper, ProductCard, ProductImg, ProductInfo, ProductTitle, ProductPrice, ProductButton } from './ProductsElements'

const Products = ({heading, data}) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt}/>
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton type={product.type}>{product.button}<MdAddShoppingCart/></ProductButton>
              </ProductInfo>
            </ProductCard>
          )
        })}
      </ProductsWrapper>
    </ProductsContainer>
  )
}

export default Products
