
  import { useState , useEffect } from "react"
  import { Alert } from "react-native"
  import { getAllPosts } from "./appwrite"
  
  // look , we are gonna fetch data a lot of time: in profile , home , bookmark screens
  // so why not to make it custom hooks so just change the function then it will fetch the data 
  
// How to make it ? 
// firstly they are normal function in which you can you 
// use built in hooks
// just like customComps they are use for creating logic that is gonna use 
// multiple times in code base

// use keyword is use for creating custom hook

//   params will be that function(fn)
  const useAppwrite = (fn:() => void) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
   

    // because this fn() will keep changing that's why keep it out of useEffect otherwise
    // it won't be reachable
    const fetchData = async () => {
        setIsLoading(true)
   try {
      const response = await fn()
      setData(response)
   } catch (error:any) {
    Alert.alert("Error", error.message)
    throw new Error(error.message)
    
    
   }finally{
     setIsLoading(false)
   }
      }
    
    // if screen renders then useEffect will run
    useEffect(() => {
 
      fetchData()
    }, [])
    
    // custom hook for refetching the data so that we can provide to
    // refres so that it can refresh
    const refetch = () => fetchData()
    // console.log("Data :" , data);

    // for returning values: we have mutliple values that's why in array 
    // same concept just  check global-provider.tsx in Imagify project
    return {data , refetch , isLoading}
  }
  
  
  export default useAppwrite
  
  
  
  
  
  
  
  
  
  
  
