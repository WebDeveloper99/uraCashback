
import React, { createContext, useEffect, useState } from 'react'

export const CompaniesContext = createContext()

export const CompaniesContextProvider = ({ children }) => {
  const [companies, setCompanies] = useState({})

  useEffect(() => {
    fetch('https://api.uracashback.uz/companies', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setCompanies(data)
      })
      .catch((err) => alert(err))
  }, [])

  return (
    <CompaniesContext.Provider value={[companies, setCompanies]}>
      {children}
    </CompaniesContext.Provider>
  )
}
