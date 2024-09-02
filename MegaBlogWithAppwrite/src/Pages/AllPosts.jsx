import React, {useState , useEffect} from 'react'
import { Contaner , PostCard} from "../Components"
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
        <Contaner>
            <div className='flex flex-wrap'>
            {
                posts.map((post)=>(
                    <PostCard key={post.$id} post={post}/>
                ))
            }

            </div>
            
        </Contaner>
        </div>
  )
}

export default AllPosts