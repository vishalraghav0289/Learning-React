import Configue from "../Configue/Configue";

import { Client,Account,ID } from "appwrite";



export class AuthService{
    client= new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(Configue.appWriteUrl)
            .setProject(Configue.appWriteProjectId);
        this.account=new Account(this.client);
            
    }
    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                // we here if userAccount is present then we directly tried to signin/login them
                this.loginAccount ({email, password})


            }
            else{
                return userAccount;
            }

        }
        catch(error){
            throw error;
        }
    }

    async loginAccount({ email, password}){
        
        try {
            return await account.createEmailPasswordSession(email, password);
            
        } catch (error) {
            throw error
            
        }



    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logOut(){
        try {
            return await this.account.deleteSessions();
            
        } catch (error) {
            console.log("error in logout authjs")
            throw error;
            
        }
    }
     

}

const authService = new AuthService();


export default authService;