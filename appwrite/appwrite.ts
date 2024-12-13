import {Client , Account , ID, Avatars, Databases, Query , } from 'react-native-appwrite'
import { config } from '~/key'


const client = new Client()
const account = new Account(client)
const avatar = new Avatars(client)
const database = new Databases(client)

 client
 .setEndpoint(config.endpoint)
 .setProject(config.projectId)
 .setPlatform(config.platfomrm)


//  here's how to write code professonally


// How it's working 
// 1. why  async await function ? cause it takes time to register a user
// 2. why trycatch ? for handling errors we have to use try catch and trow Error("error")

// why params in createUser fun not in create(even thoguh email ... are props of that)
// reason is underlies the concpet of js functions and scoping work
// firstly  by function scop {iske andar aane code don't know about outer wrold  }
// because of nested funtions ? 

// // so here we have two fn createUser and account fn(it has method also named as "create") and we are even calling it by account.create() 
// inner function is under the scope of  outer funtions so it does'nt know anything about it even doesn' any parmas because we are calling it 
// so we have to pass params from outer outer function  
// if you don't give params(varialbe) then they don'st know about it and will say could'nt find 

export const createUser = async( email: string, password: string, username: string ) => {
    try {
        const newAccount = await account.create(
            ID.unique(), email, password,username,) 
            
            if(!newAccount) throw Error("Getting errros")
            const avatarUrl = avatar.getInitials() 
            // for getting the user's  avatar icon
// after registering user then it will create session so that user can use it
//  signIn is just for creating session
         await signIn(email ,password)

        //  for adding user in our database
const newUser = await database.createDocument(
    config.databseId,
    config.usersCollectionId,
    ID.unique(),
    {
        // we are getting id from appwrite Auth ID
        accountId: newAccount.$id,
        // here username: username (we just wrote shorthand props 
        // when values and keys are same then you can do it )
        username,
        email,
        avatar: avatarUrl,
        // password: password
    }
)

// why? so that we can use it later 
return newUser


    } catch (error:any) {
        console.log("createUser: ", error);
        // for rejecting promise and throwing errror 
        throw new Error(error)
          
    }
    
 }
export const  signIn = async (email:string , password: string) => {
    try {
        // for creating session but why: so that user can get the permission to use site
        // in creatUser we just registred user's data in Auth
        // not gave the permission to use the app
        const session = account.createEmailPasswordSession(email, password)
        // why return? so that we can use this fun in other
      return session
    } catch (error:any) {
        console.log("signIn: ", error);
        throw new Error(error)
    }

    
}
export const  getCurrentUser = async () => {
    try {
        // for getting the data of currently logged in user.
     const currentAcconut = await account.get()
 
     //if no  currentAccount in appwrite'Auth then throw error
      if (!currentAcconut) {
     throw new Error
      }
    //   both syntax is correct if you have two condiiton body in
    // just one line then don't use { }
    //   if (!currentUser) throw new Error

    // for listing the userData from database
    const currentUser = database.listDocuments(
        config.databseId,
        config.usersCollectionId,
        [
            //accontId is key and value is currentAccount.id
            Query.equal('accountId', currentAcconut.$id)
        ]
    )
// if no user in database then throw error
    if (!currentUser) {
        throw new Error
        
    }

    // for sending userData  to other from database only one user
    return (await currentUser).documents[0]
    } catch (error:any) {
        console.log("signIn: ", error);
        throw new Error(error)
    }

    
}
