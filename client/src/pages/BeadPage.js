import { useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import beadsswirl from '../components/BeadSwirlDetails'

const BeadPage = () => {
  const { beadId } = useParams();
  const bead = beadsswirl.find(bead => bead.name === beadId);

  if(!bead) {
    return <NotFoundPage />
  }

  return (
    <main>
      <h1>{bead.title}</h1>
      {bead.content.map((p) => (<p key={bead.name}>{p}</p>))}
    </main>
  );
}

export default BeadPage;