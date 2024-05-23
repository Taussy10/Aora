import { Client , Databases , Query  } from 'react-native-appwrite';

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

// Init your React Native SDK
const client = new Client();
const databases = new Databases(client);



client
    .setEndpoint(endpoint) // Your Appwrite Endpoint
    .setProject(projectId) // Your project ID
    .setPlatform(platform) // Your application ID or bundle ID.
;

export const getAllposts = async () => {
    try {
        const posts = await databases.listDocuments(
            databaseId,
             videosCollectionId,);
             return posts.documents
    } catch (error) {
        throw new Error(error);
    }    

}

