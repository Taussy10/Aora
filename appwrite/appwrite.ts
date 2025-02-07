import {Client , Account , ID, Avatars, Databases, Query ,Storage } from 'react-native-appwrite'
import { config } from '~/key'


const client = new Client()
const account = new Account(client)
const avatar = new Avatars(client)
const database = new Databases(client)
const storage = new Storage(client)

 client
 .setEndpoint(config.endpoint)
 .setProject(config.projectId)
 .setPlatform(config.platform)


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

export const  signOut = async () => {
    try {
     const session =   await account.deleteSession('current');


       return session
    } catch (error:any) {
        console.log("signout from  appwrite.ts: ", error);
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



export const  getAllPosts = async () => {
    try {
       const posts = database.listDocuments(
        config.databseId,
        config.videosCollectionId ,

            // If you want to get all the data then no need to use query
           

            
    )
    return (await posts).documents
    //   return session
    } catch (error:any) {
        console.log("signIn: ", error);
        throw new Error(error)
    }

    
}
export const  getLatestPosts = async () => {
    try {
       const posts = database.listDocuments(
        config.databseId,
        config.videosCollectionId ,
        [
        Query.orderDesc('$createdAt'),
        Query.limit(7)
        // know can we use this below method ? 
        // Query.orderDesc('$createdAt',  Query.limit(7)),
      
        ]

            // If you want to get all the data then no need to use query
           

            
    )
    return (await posts).documents
    //   return session
    } catch (error:any) {
        console.log("signIn: ", error);
        throw new Error(error)
    }

    
}

// for search
export const  getSearchPosts = async (query:string) => {
    try {
       const posts = database.listDocuments(
        config.databseId,
        config.videosCollectionId ,
        [
        Query.search('title', query),
        // know can we use this below method ? 
        // Query.orderDesc('$createdAt',  Query.limit(7)),
      
        ]

            // If you want to get all the data then no need to use query
           

            
    )
    return (await posts).documents
    //   return session
    } catch (error:any) {
        console.log("getSearchPosts from appwrite.ts: ", error);
        throw new Error(error)
    }

    
}
// for getting user's posts
export const  getUserPosts = async (userId:string) => {
    try {
       const posts = database.listDocuments(
        config.databseId,
        config.videosCollectionId ,
        [
        Query.equal('creator', [userId]),
        // know can we use this below method ? 
        // Query.orderDesc('$createdAt',  Query.limit(7)),
      
        ]

            // If you want to get all the data then no need to use query
           

            
    )
    return (await posts).documents
    //   return session
    } catch (error:any) {
        console.log("getSearchPosts from appwrite.ts: ", error);
        throw new Error(error)
    }

    
}





// add User posts will be added in posts collecton
// export const  getFilePreview = async (fileId, type) => {
//     let fileUrl;

//     try {
//     if (type === 'video') {

//          fileUrl = storage.getFilePreview(config.filesBucketId, fileId         )
//     } else if (type === 'image') {
//         fileUrl = storage.getFilePreview(config.filesBucketId, fileId , 2000 , 2000      )

//     }else{
//         throw new Error("Invalid file type")

//     }
    
//     if (!fileUrl) throw Error

//     return fileUrl
//     // return (await posts).documents
//     //   return session
//     } catch (error:any) {
//         console.log("getSearchPosts from appwrite.ts: ", error);
//         throw new Error(error)
//     }

    
// }



// add User posts will be added in posts collecton
// export const  uploadFile = async (file , type) => {
//     try {
//     if (!file) return


//     const {mimeType , ...rest} = file;
//     const asset = {type: mimeType , ...rest}

// try {
//     // by uploadin we get mimeType(media type) = file media type (jpeg , mp4)
//     const uploadFile = await storage.createFile( 
//         config.filesBucketId,
//         ID.unique(),
//         asset
//     )
// console.log("uploadFile :" ,uploadFile);

//     // const fileUrl = await getFilePreview(uploadFile.$id , type)
//     // return fileUrl
//     return  uploadFile
// } catch (error) {
//     throw new Error(error)
    
// }

//     // return (await posts).documents
//     //   return session
//     } catch (error:any) {
//         console.log("uploadFiles from appwrite.ts: ", error);
//         throw new Error(error)
//     }

    
// }


// // For adding in the database , User posts will be added in posts collection
// export const  createVideo = async (from) => {
//     try {
//     const [thumbnailUrl , videoUrl] = await Promise.all(
//         [
//             uploadFile(from.thumbnail, 'image'),
//             uploadFile(from.video, 'video'),
//         ]
//        )
//        console.log("ye" ,thumbnailUrl);
       
//     const newPost = await database.createDocument(
//         config.databseId , config.videosCollectionId , ID.unique(),
//         {
//             title: from.title ,
//             thumbnail: thumbnailUrl,
//             video: videoUrl ,
//             prompt: from.prompt,
//             creator: from.userId
//         }
//     )
//     console.log("newPost :" , newPost);
    
//     // return (await posts).documents
//     //   return session
//     } catch (error:any) {
//         console.log("getSearchPosts from appwrite.ts: ", error);
//         throw new Error(error)
//     }

    
// }


// file: {
//   name: string;
//   type: string;
//   size: number;
//   uri: string;
// }

// here we passed two params. why ?
// export const uploadFile = async(file , type) => {
// export const uploadFile = async(file , type) => {

// if(!file) return;
// console.log("File :",file);

// // how are getting asset data ?
// // basically  createPosts file we send the file == form.thumbnail
// // so if you console the thumbnail hen you will it's data
// const asset = {
//       name: file.fileName ,
//       type: file.type ,
//       size: file.fileSize  ,
//       uri: file.uri  ,
//     }

//   try {
//     const uploadedfile = await storage.createFile(
//       config.filesBucketId,
//       ID.unique(),
//       asset
      
         
//     // I've to provide assets(thumbnail and video ) here ? how 
//     )
    
//     // console.log("File :" ,file);
//     return uploadedfile
//   } catch (error) {
//     console.log("uploadFile error from appwrite.ts: ", error);
//     throw new Error(error);
//   }
// }



export const uploadFile = async (file, type) => {
    if (!file) {
      console.error("No file provided for upload.");
      return;
    }
  
    const asset = {
      name: file.fileName,
      type: file.type,
      size: file.fileSize,
      uri: file.uri,
    };
  
    try {
      const uploadedFile = await storage.createFile(
        config.filesBucketId,
        ID.unique(),
        asset,
      );
  
      console.log("File uploaded successfully:", uploadedFile);
      return uploadedFile;
    } catch (error) {
      console.error("uploadFile error:", error.message || error);
      throw error;
    }
  };
  
// params is for getting data frm form (in create.tsx file )

export const createPosts = async(from ) => {
  try {
    // here we are destrcuting the array(having two variables) that will come from 
    // await Promise.all([])
    // let met tell you what's the use Promise.all use for executing more than one 
    // async function at same tim 
    // both upload file will give a promise object and from where we are destrucuting the varilbe
    // also we passed the params for sending values to uploadFile function 
    const [thumbnailUrl , videoUrl] = await Promise.all([
      uploadFile(from.thumbnail , 'image'),
      uploadFile(from.video , 'video'),
    ])
    // console.log("URLS:" ,thumbnailUrl , videoUrl);
    
    const post = await database.createDocument(
      config.databseId,
      config.videosCollectionId,
      ID.unique(), 
      {
        title: from.title ,
        thumbnail: from.thumbnail ,
        video: from.video ,
        prompt: from.prompt ,
        creator: from.userId
// id of account holder
      }
    )
    
    return post
  } catch (error) {
    console.log("createPosts error from appwrite.ts: ", error);
    throw new Error(error);
  }
}











