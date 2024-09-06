import React, { useState, useEffect } from 'react';
import  Container  from "../Components/Container/Container";
import appwriteservice from '../appWrite/config';
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from '../Components/PostForm/PostForm'; 

function EditPost() {
  const [posts, setPosts] = useState(null); // Rename the state variable to posts
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteservice.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  return posts ? ( // Access the state as posts
    <div className='py-8'>
      <Container>
        <PostForm post={posts} /> // Pass the posts state to the PostForm component
      </Container>
    </div>
  ) : null;
}

export default EditPost;