import React, {useState , useEffect} from 'react'
import { Contaner , PostCard} from "../Components"
import appwriteservice from '../appWrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
   const[post, setPosts]=useState(null)
   const{slug}= useParams();
   const navigate =useNavigate();

   useEffect(() => {
     if(slug){
       appwriteservice.getPost(slug).then((post)=>
       {
        if(post){
          setPosts(posts);
        }
        else{
          navigate("/");
        }
       }
      )
     }
   }, [slug, navigate])
   
    
  return post ? (
    <div className=' py-8'>
      <Contaner>
      <PostForm  post={post}/>
      </Contaner>
    </div>
  ) : null
}

export default EditPost