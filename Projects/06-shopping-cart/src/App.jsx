import { products as initialProducts } from './mocks/products.json'
import { Products } from "./components/Products.jsx"
import { Header } from './components/Header.jsx'
import { useState } from 'react'
import { Footer } from './components/Footer.jsx'

function useFilters () {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }
  return { filterProducts, setFilters }
}

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilters } = useFilters()
  const filteredProducts = filterProducts(products)
  
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer></Footer>
    </>
  )
}

export default App
