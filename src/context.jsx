import React, { useState, useContext, useEffect } from 'react'
import { API_ENDPOINT } from './useFetch'
// make sure to use https
import  useFetch  from './useFetch'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('houston')
  const {isLoading, error, data: movies} = useFetch(`&s=${query}`);
  
  return <AppContext.Provider value={{
    isLoading,
    error,
    movies,
    query,
    setQuery
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
