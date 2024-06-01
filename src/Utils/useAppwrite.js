import { Alert } from "react-native";
import { useEffect, useState } from "react";

const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  // we made function
  const fetchData = async () => {
    // when function calls setLoading = true
    setLoading(true);
    // then it will try 
    try {
      // to call the function and store data in res
      const res = await fn();
      // then save the data in data
      setData(res);
      // if catches error then show the error
    } catch (error) {
      Alert.alert("Error", error.message);

    } 
// if any of them work then loading will be false
    finally {
      setLoading(false);
    }
  };


  // when you move to that screen it will call the function due to sideEffect and show the data otherwise you have to refersh the data
  // dependency arry make sure that it only show data when it mounts
  useEffect(() => {
    fetchData();
  }, []);

  // refetch function is for loading that is calling fetchData when refetch called 
  const refetch = () => fetchData();

  // then we send all the things 
  return { data, loading, refetch };
};

export default useAppwrite;
