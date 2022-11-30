import JewelryList from '../components/JewelryList';
import piecesnecklaces from '../data/JewelryDetailsNecklaces';
import piecesbracelets from '../data/JewelryDetailsBracelets';

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