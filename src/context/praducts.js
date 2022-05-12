


import React, { createContext, useEffect, useState } from 'react'

export const ProductsContext = createContext()

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState({})

  const handleCompanyId = localStorage.getItem('companyId');

  useEffect(() => {
    fetch(`https://api.uracashback.uz/companies/${localStorage.getItem('companyId')}/products`, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setProducts(data)
      })
      .catch((err) => console.log(err))
  }, [handleCompanyId])

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {children}
    </ProductsContext.Provider>
  )
}
