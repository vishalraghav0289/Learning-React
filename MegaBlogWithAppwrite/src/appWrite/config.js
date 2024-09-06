import Configue from "../Configue/Configue";

import { Client,Account,ID , Databases,Storage, Query} from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(Configue.appWriteUrl)
            .setProject(Configue.appWriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);    
    }

    async createPost({title , slug , content , featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                Configue.appWriteDatabaseId,
                Configue.appWriteCollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId,

                }

            )
            
        } catch (error) {
            console.log("error in Create post");
            throw error;
            
        }
    }

    async updatePost(slug, {title , content , featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                Configue.appWriteDatabaseId,
                Configue.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }

            )
            
        } catch (error) {
            console.log("error in update post")
            throw error;
            
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                Configue.appWriteDatabaseId,
                Configue.appWriteCollectionId,
                slug,
               
            )
            return true;
            
        } catch (error) {
            console.log("error in update post")
            throw error;
            return false;
            
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                Configue.appWriteDatabaseId,
                Configue.appWriteCollectionId,
                slug,
               
            )
        } catch (error) {
            console.log("error in update post")
            throw error;
            return false;
            
        }
    }

    async getPosts(queries=[Query.equal("status" , "Active")]){
        try {
            return await this.databases.listDocuments(
                Configue.appWriteDatabaseId,
                Configue.appWriteCollectionId,
                queries,
            )
            
        } catch (error) {
            console.log("error in getposts")
            throw error;
            
        }

    }

    /// here is code for upload file


    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                Configue.appWriteBucketId,
                ID.unique(),
                file,
            )
            
        } catch (error) {
            console.log("error in upload file")
            throw error;
            return False;
            
        }

    }

    async deleteFile(fileID){
        try {
            return await this.bucket.deleteFile(
                Configue.appWriteBucketId,
                fileID,
            )
            return true;
            
        } catch (error) {
            console.log("error in upload file")
            throw error;
            return False;
            
        }

    }
     getFilePreview(fileID){
         return this.bucket.getFilePreview(
                Configue.appWriteBucketId,
                fileID,
            )
    }

   
    
}

const service= new Service();
export default {service};