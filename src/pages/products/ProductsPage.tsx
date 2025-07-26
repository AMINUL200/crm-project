import ProductsCompo3 from '../../components/products/ProductsCompo3'
import ProductTable from '../../components/products/ProductTable'
import StatsCard from '../../components/products/StatsCard'

const ProductsPage = () => {
  return (
    <div className='bg-gray-100 h-screen'>
    <StatsCard/>
    <ProductTable/>
    <ProductsCompo3/>
      
    </div>
  )
}

export default ProductsPage
