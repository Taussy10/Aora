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

// import React, { createContext, useContext, useState, useEffect, isValidElement } from 'react';
// import { getCurrentUser } from '~/appwrite/appwrite'

// // default value === null
// // write it's name always in capital letter cause we have to make a comp
// // out of it 
// const  GlobalContext = createContext(null)
// GlobalContext.displayName = "GlobalContext";
// // for using and sediing context 
// export const useGlobalContext = () => useContext(GlobalContext)

// export const GlobalProvider:React.FC<{children: React.ReactNode}> = ({children}) => {
// const [isLoggedIn, setIsLoggedIn] = useState(false)
// const [user, setUser] = useState(null)
// const [loading, setLoading] = useState(true)
// // jjj


// // {
//     // isLoggedIn , setIsLoggedIn , user, setUser , loading , setLoading  
// // }
// // 
//     return(
//     <GlobalContext.Provider value= { 
//      "isLoggedIn"} > 
//       {children}
//     </GlobalContext.Provider>
//     )
// } 




// import React, { createContext, useContext, useEffect, useState } from "react";

// import { getCurrentUser } from "~/appwrite/appwrite";

// const GlobalContext = createContext(null);
// export const useGlobalContext = () => useContext(GlobalContext);

// const GlobalProvider = ({ children }) => {
//   const [isLogged, setIsLogged] = useState(false);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getCurrentUser()
//       .then((res) => {
//         if (res) {
//           setIsLogged(true);
//           setUser(res);
//         } else {
//           setIsLogged(false);
//           setUser(null);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <GlobalContext.Provider
//       value={{
//         isLogged,
//         setIsLogged,
//         user,
//         setUser,
//         loading,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// export default GlobalProvider;