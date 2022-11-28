import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NotFoundPage from './NotFoundPage';
import pieces from '../components/JewelryDetailsBracelets'

const JewelryPage = () => {
  const [jewelryInfo, setJewelryInfo] = useState({ upvotes: 0, comments: []});

  useEffect(() => {
    const loadJewelryInfo = async () => {
      const response = await axios.get(`/api/jewelry/${pieceId}`)
      const newPieceInfo = response.data;
      setJewelryInfo(newPieceInfo);
    }
    loadJewelryInfo();
  }, []);

  const { pieceId } = useParams();
  const piece = pieces.find(piece => piece.name === pieceId);

  if(!piece) {
    return <NotFoundPage />
  }

  return (
    <main>
      <h1>{piece.title}</h1>
      <p>This piece has {jewelryInfo.upvotes} upvote(s)</p>
      {piece.content.map((p) => (<p key={piece.name}>{p}</p>))}
    </main>
  );
}

export default JewelryPage;