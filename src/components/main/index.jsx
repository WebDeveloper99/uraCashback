import React from 'react'

const Main = () => {

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
      console.log(data);
      localStorage.setItem('token', data.token)
    })
    .catch((err) => console.log(err))

  return <div>
    main
  </div>
}

export default Main
