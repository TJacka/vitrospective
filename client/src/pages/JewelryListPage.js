import JewelryList from '../components/JewelryList';
import piecesnecklaces from '../components/JewelryDetailsNecklaces';
import piecesbracelets from '../components/JewelryDetails';

const JewelryListPage = () => {
  return (
    <>
      <JewelryList 
        piecesbracelets={piecesbracelets}
        piecesnecklaces={piecesnecklaces} 
      />
    </>
  )
}

export default JewelryListPage