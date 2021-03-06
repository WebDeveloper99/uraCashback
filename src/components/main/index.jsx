import React, { useContext } from 'react'
import { DataBar, Link, Discreption } from './style'

import { CompaniesContext } from '../../context/companies'

const Main = () => {
  const [companies, setcompanies] = useContext(CompaniesContext)

  const setFeedbackIdtoLocalStorage = (id) => {
    localStorage.setItem('companyId', id)
  }

  return (
    <div>
      {companies.items.map((value) => {
        return (
          <DataBar key={value.id} >
            <Link
              onClick={() => setFeedbackIdtoLocalStorage(value.id)}
              to={'/product'}
            >
              {value.name}
            </Link>
            <Discreption>{value.status}</Discreption>
          </DataBar>
        )
      })}
    </div>
  )
}

export default Main
