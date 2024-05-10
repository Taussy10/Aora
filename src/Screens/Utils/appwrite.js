import { Client } from 'react-native-appwrite';

export const appwriteConfig ={
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.app.aora",
    projectId: "663c93ed000782d4ca9b",
    databaseId: "663e206300375cc7dc31",
    userCollectionId: "663e232b003acf973162",
    videosCollectionId: "663e236f0008e8cde4cd",
    storageId: "663e26db000b926dfbb7",
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
    .setProject('455x34dfkj') // Your project ID
    .setPlatform('com.example.myappwriteapp') // Your application ID or bundle ID.
;