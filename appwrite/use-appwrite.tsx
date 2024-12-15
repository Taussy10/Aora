
  import { useState , useEffect } from "react"
  import { Alert } from "react-native"
  import { getAllPosts } from "./appwrite"
  
  // look , we are gonna fetch data a lot of time: in profile , home , bookmark screens
  // so why not to make it custom hooks so just change the function then it will fetch the data 
  
//   params will be that function(fn)
  const useAppwrite = (fn:() => void) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
   
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
    return {data , refetch , isLoading}
  }
  
  
  export default useAppwrite
  
  
  
  
  
  
  
  
  
  
  
