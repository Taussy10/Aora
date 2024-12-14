import React,{useState , useEffect , useContext , createContext, ReactNode} from "react";
import { getCurrentUser } from '~/appwrite/appwrite'
interface GlobalProviderProps {
    children: ReactNode; // Type for children
  }
export const GlobalContext = createContext('default value')

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)
// here res means response that we got from get CurerentUser()
  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
            setIsLoggedIn(true);
          setUser(res);
        } else {
            setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
    return (
      <GlobalContext.Provider value={{isLoggedIn , setIsLoggedIn , user, setUser , loading , setLoading } }
      >
        {children}
      </GlobalContext.Provider>
    );
  };

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalProvider

