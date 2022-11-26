import AccessoriesList from '../components/AccessoriesList';
import accessories from '../components/AccessoryDetails';

const AccessoriesListPage = () => {
  return (
    <>
      <AccessoriesList accessories={accessories} />
    </>
  )
}

export default AccessoriesListPage