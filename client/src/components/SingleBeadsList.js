import { Link } from 'react-router-dom'

const SingleBeadsList = ({ singlebeads }) => {
  return (
	  <main>
      <h1>Single Beads</h1>
      {singlebeads.map(bead => (
        <Link key={bead.name} to={`/accessories/${bead.name}`} >
          <h3>{bead.title}</h3>
          <p>{bead.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </main>
  )
}

export default SingleBeadsList