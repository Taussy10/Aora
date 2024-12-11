import {Client , Account , ID, Avatars , } from 'react-native-appwrite'
import { config } from '~/key'


const client = new Client()
const account = new Account(client)
const avatar = new Avatars(client)

 client
 .setEndpoint(config.endpoint)
 .setProject(config.projectId)
 .setPlatform(config.platfomrm)


//  here's how to write code professonally

// email, pasword, username

export const createUser = async() => {
    try {
        const newAccount = await account.create(
            ID.unique(), email , password)

            if(!newAccount) throw Error
       
            const avatarUrl = avatar.getInitials() 
            // for getting the user's initials avatar icon

    } catch (error:any) {
        console.log("createUser: ", error);
        throw new Error(error)
        // throw keyword is for raising something here Error 
        // 
        
        
    }
    
 }

