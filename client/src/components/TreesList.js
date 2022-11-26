import { Link } from 'react-router-dom'

const TreesList = ({ trees }) => {
  return (
	  <main>
      <h1>Trees</h1>
      {trees.map(tree => (
        <Link key={tree.name} to={`/trees/${tree.name}`} >
          <h3>{tree.title}</h3>
          <p>{tree.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </main>
  )
}

export default TreesList