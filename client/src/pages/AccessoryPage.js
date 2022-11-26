import { useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import accessories from '../components/AccessoryDetails'

const AccessoryPage = () => {
  const { accessoryId } = useParams();
  const accessory = accessories.find(accessory => accessory.name === accessoryId);

  if(!accessory) {
    return <NotFoundPage />
  }

  return (
    <main>
      <h1>{accessory.title}</h1>
      {accessory.content.map((p) => (<p key={accessory.name}>{p}</p>))}
    </main>
  );
}

export default AccessoryPage;