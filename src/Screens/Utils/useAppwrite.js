// This is custom Hook
import { useState , useEffect } from "react";
import {Alert} from "react-native"
import { getAllposts } from "./appwrite";

const useApprite = (fn) =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
   
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fn();
          setData(response);
          setLoading(false);
        } catch (error) {
          // console.error('Error fetching posts:', error);
          // setLoading(false);
          Alert.alert("Error", error.message)
        }
        finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array to run effect only once on component mount
  
   return{data}
} 

export default useApprite