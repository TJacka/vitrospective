import JewelryList from '../components/JewelryList';
import productList from '../data/productList';

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