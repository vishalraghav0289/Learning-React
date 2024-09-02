import React, {useState , useEffect} from 'react'
import { Contaner , PostCard} from "../Components"
import appwriteservice from '../appWrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
   const[posts, setPosts]=useState(null)
   const{slug}= useParams();
   const navigate =useNavigate();

   useEffect(() => {
     if(slug){
       appwriteservice.getPosts(slug).then((post)=>
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
   }, [third])
   
    
  return (
    <div>EditPost</div>
  )
}

export default EditPost