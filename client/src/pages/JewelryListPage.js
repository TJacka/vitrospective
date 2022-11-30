import JewelryList from '../components/JewelryList';
import productList from '../data/ProductList';

const JewelryListPage = () => {
  return (
    <>
      <JewelryList 
        productList={productList} 
      />
    </>
  )
}

export default JewelryListPage