import SingleBeadsList from '../components/SingleBeadsList';
import singlebeadswirl from '../components/SingleBeadSwirlDetails';
import singlebeadfloral from '../components/SingleBeadFloralDetails';
import singlebeadpendant from '../components/SingleBeadPendantDetails';

const SingleBeadsListPage = () => {
  return (
    <>
      <SingleBeadsList 
        singlebeadswirl={singlebeadswirl} 
        singlebeadfloral={singlebeadfloral} 
        singlebeadpendant={singlebeadpendant} 
      />
    </>
  )
}

export default SingleBeadsListPage