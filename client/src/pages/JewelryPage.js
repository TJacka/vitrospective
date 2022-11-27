import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NotFoundPage from './NotFoundPage';
import trees from '../components/JewelryDetails'

const TreePage = () => {
  const [treeInfo, setTreeInfo] = useState({ upvotes: 0, comments: []});

  useEffect(() => {
    const loadTreeInfo = async () => {
      const response = await axios.get(`/api/trees/${treeId}`)
      const newTreeInfo = response.data;
      setTreeInfo(newTreeInfo);
    }
    loadTreeInfo();
  }, []);

  const { treeId } = useParams();
  const tree = trees.find(tree => tree.name === treeId);

  if(!tree) {
    return <NotFoundPage />
  }

  return (
    <main>
      <h1>{tree.title}</h1>
      <p>This tree has {treeInfo.upvotes} upvote(s)</p>
      {tree.content.map((p) => (<p key={tree.name}>{p}</p>))}
    </main>
  );
}

export default TreePage;