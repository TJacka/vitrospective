import { Link } from 'react-router-dom'

const AccessoriesList = ({ accessories }) => {
  return (
	  <main>
      <h1>Accessories</h1>
      {accessories.map(accessory => (
        <Link key={accessory.name} to={`/accessories/${accessory.name}`} >
          <h3>{accessory.title}</h3>
          <p>{accessory.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </main>
  )
}

export default AccessoriesList