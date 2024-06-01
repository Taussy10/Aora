import { Client , Databases , Query  , Account , ID, Avatars } from 'react-native-appwrite';
// Client for intialising appwrite Client{user}
// Database for using database
// ID: for unkiue ID
// avatars: for avatars of users

export const appwriteConfig ={
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.app.aora",
    projectId: "663c93ed000782d4ca9b",
    databaseId: "663e206300375cc7dc31",
    userCollectionId: "663e232b003acf973162",
    videosCollectionId: "663e236f0008e8cde4cd",
    storageId: "663e26db000b926dfbb7",
}

// destructure the data
const {
endpoint , platform , projectId , databaseId , userCollectionId , videosCollectionId , storageId
} = appwriteConfig


// for using client , database and other thing
const client = new Client();
const databases = new Databases(client);
const account = new Account(client);
const avatvars = new Avatars(client);


// to kitne kaam ho rahe
// 1. create 
// 2. adding avatar
// . stored in database
// 4. signIn

// Client is use for intialising the appwrite

client
    .setEndpoint(endpoint) // Your Appwrite Endpoint
    .setProject(projectId) // Your project ID
    .setPlatform(platform) // Your application ID or bundle ID.
;


// for creating newUsers
// these are just paramerters you knw what is params
export const createUser = async ( email , password , username , ) => {

    // Register User
    // account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    //     .then(function (response) {
    //         console.log(response);
    //     }, function (error) {
    //         console.log(error);
    //     });

 try {
    // when Newaccount creates it should take for 4 things: id ,email ...
    const newAccount = await account.create(ID.unique(),
   email ,
   password,
   username ,
   avatarUrl
)
console.log(newAccount);
console.log(email , "Email" );
console.log(password, "pssword");
// if it's not newaccount then throw error
 if (!newAccount) throw Error

//  for creating avatar for users in which username likha hoga
 const avatarUrl = avatvars.getInitials(username)

//  then it should sign in with haing two things email and password
 await SignIn(email , password) 


//  we have signIn now put all data into databases
const newUser = await databases.createDocument(databaseId, userCollectionId , ID.unique(),
{
    // id  as vriable alwas written like this
    accountId: newAccount.$id,
    email,
    username, 
    avatar: avatarUrl, // Include the avatar attribute
})

// work has complelted
return newUser


 }
//  if these thing sare not true thent hrow error
 catch (error) {
    console.log(error);
    throw new Error(error)
 }

}


// For sigIn it takes two params: email and password
export const SignIn = async (email , password) =>  {
// export const  () = async SignIn(email , password) {
    try {
        // Allow the user to login into their account by providing a valid email 
        // and password combination. This route will create a new session for the user.
        const session = await account.createEmailPasswordSession(email , password) 

        // work has complelted
        return session
    } 
    //  if not true then throw error
    catch (error) {
        console.log(error);
        throw new Error(error)
    }
}


// !
export const getCurrentUser =async () => {
try {
    const CurrentAccount = await account.get()
   if (!CurrentAccount) throw Error
   const CurrentUser = await databases.listDocuments(
    databaseId , userCollectionId ,
    [Query.equal("accountId" , CurrentAccount.$id)]
   )
   if (!CurrentUser) throw Error

   return CurrentUser.documents[0]
} catch (error) {
    console.log(error);

}
}

// function is use for writing useable code everywhere
// and try catch so that if error it can handle itself
export const getAllposts = async () => {
    try {
        const posts = await databases.listDocuments(
            databaseId,
             videosCollectionId,);
            //  documents here is video database each data
            
             return posts.documents
             
    } catch (error) {
        throw new Error(error);
    }    
 
}

