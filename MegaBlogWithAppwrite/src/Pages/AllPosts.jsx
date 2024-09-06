import React, { useState, useEffect } from 'react';
import { Container, PostCard } from "../Components/Index";
import appwriteservice from '../appWrite/config';

function AllPosts() {
  const [posts, setPosts] = useState([]); // Move the useState hook inside the component

  useEffect(() => {
    appwriteservice.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []); // Move the useEffect hook inside the component

  return (
    <div w-full>
      <Container>
        <div className='flex flex-wrap'>
          {
            posts.map((post) => (
              <div key={post.$id} className='py-2 w-1/4'>
                <PostCard post={post} />
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;