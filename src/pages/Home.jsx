import { useEffect, useState } from "react";
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore';
import {auth, db} from '../firebase-config';

const Home = ({isAuth}) => {

  const [postLists, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);
  const postsCollectionRef = collection(db, 'posts');

  const getPosts = async() => {
    setLoading(false);
    const data = await getDocs(postsCollectionRef);
    setPostList(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    setLoading(false);
  }

  const deletePost = async(id)=>{
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
    getPosts();
  }

  useEffect(() => {
    getPosts();
  },[])

  if(loading){
    return <h3>Loading...</h3>
  }

  return (
    <div className="homepage">
      {postLists.length === 0 ? <h3>No post Added</h3> : postLists.map((post) => {
        return (
          <div key={post.id} className="card mb-4 shadow shadow-sm">
            
            <div className="card-body">
              {isAuth && post.author.id === auth.currentUser.uid && <div className="d-flex justify-content-end">
                <button className="btn btn-danger my-3 mx-3" onClick={() => {deletePost(post.id)}}>
                  Delete Post
                </button>
              </div>}
              <h5 className="card-title mb-3 fw-bold">{post.title}</h5>
              <p className="card-title mb-3">{post.postTitle}</p>
              <span className="badge bg-dark">{post.author.name}</span>
            </div>
      </div>
        )
      })}
    </div>
  )
}

export default Home