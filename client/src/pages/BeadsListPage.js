import BeadsList from '../components/BeadsList';
import productList from '../data/productList';

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
        productList={productList} 
      />
    </>
  )
}

export default BeadsListPage