import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NotFoundPage from './NotFoundPage';

const JewelryPage = (products) => {
  const [jewelryInfo, setJewelryInfo] = useState({ upvotes: 0, comments: []});

  useEffect(() => {
    const loadJewelryInfo = async () => {
      const response = await axios.get(`/api/jewelry/${productId}`)
      const productInfo = response.data;
      setJewelryInfo(productInfo);
    }
    loadJewelryInfo();
  }, []);

  const { productId } = useParams();
  const product = products.find(product => product.name === productId);

  if(!product) {
    return <NotFoundPage />
  }

  return (
    <main>
      <h1>{product.title}</h1>
      <p>This piece has {jewelryInfo.upvotes} upvote(s)</p>
      {product.content.map((p) => (<p key={product.id}>{p}</p>))}
    </main>
  );
}

export default JewelryPage;