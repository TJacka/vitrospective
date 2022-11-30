import BeadsList from '../components/BeadsList';
import beadsswirl from '../data/BeadSwirlDetails';
import beadsfloral from '../data/BeadFloralDetails';
import beadspendant from '../data/BeadPendantDetails';

// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

const BeadsListPage = () => {

  // let pieceInfo;

  // useEffect(() => {
  //   const loadJewelryInfo = async () => {
  //     const response = await axios.get(`/api/jewelry/${pieceId}`)
  //     pieceInfo = response.data;
  //   }
  //   loadJewelryInfo();
  // }, []);

  // const { pieceId } = useParams();
  // const piece = pieceInfo.find(piece => piece.name === pieceId);



  return (
    <>
      <BeadsList 
        beadsswirl={beadsswirl} 
        beadsfloral={beadsfloral} 
        beadspendant={beadspendant} 
      />
    </>
  )
}

export default BeadsListPage