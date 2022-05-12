

import React, { createContext, useEffect, useState } from 'react'
import { CompaniesContextProvider } from './companies'
import { ProductsContextProvider } from './praducts'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    return (
      <GlobalContext.Provider value={''} >
        <CompaniesContextProvider>
          <ProductsContextProvider>
            {children}
          </ProductsContextProvider>
        </CompaniesContextProvider>
      </GlobalContext.Provider>
    );
}
