import BeadsList from '../components/BeadsList';
import beadsswirl from '../components/BeadSwirlDetails';
import beadsfloral from '../components/BeadFloralDetails';
import beadspendant from '../components/BeadPendantDetails';

const BeadsListPage = () => {
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