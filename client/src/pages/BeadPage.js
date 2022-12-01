import { useParams } from 'react-router-dom';
import productList from '../data/productList';
import NotFoundPage from './NotFoundPage';

const BeadPage = () => {
  const { beadId } = useParams();
  const product = productList.find(product => product.id === beadId);

  if(!product) {
    return <NotFoundPage />
  }

  return (
    <main>
      <h1>{product.title}</h1>
      {product.content.map((p) => (<p key={product.id}>{p}</p>))}
    </main>

  );
}

export default BeadPage;