import { Link } from 'react-router-dom'

const JewelryList = ({ pieces }) => {
  return (
	  <main>
      <h1>Jewelry</h1>
      {pieces.map(piece => (
        <Link key={piece.name} to={`/jewelry/${piece.name}`} >
          <h3>{piece.title}</h3>
          <p>{piece.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </main>
  )
}

export default JewelryList