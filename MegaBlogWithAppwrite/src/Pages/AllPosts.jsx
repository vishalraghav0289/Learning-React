import React, {useState , useEffect} from 'react'
import { Container , PostCard} from "../Components/Index"
import appwriteservice from '../appWrite/config'

const [posts , setPosts] = useState([]);
useEffect(()=>{},[]);
appwriteservice.getPosts([]).then((posts)=>{
    if(posts){
        setPosts(posts.documents);
    }
});

function AllPosts() {
  return (
    <div w-full>
        <Container>
            <div className='flex flex-wrap'>
            {
                posts.map((post)=>(
                  <div  key={post.$id} className='py-2 w-1/4'>
                    <PostCard  post={post}/>
                    </div>
                ))
            }

            </div>
            
        </Container>
        </div>
  )
}

export default AllPosts