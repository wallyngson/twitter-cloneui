import React, { useState, useEffect } from 'react';

import Layout from './components/Layout'
import GlobalStyle from './styles/GlobalStyles'

function App() {

  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (

    <>
      <div className='loading'>
        {
          loading 
          ? ( <img src='https://img.icons8.com/color/50/000000/twitter--v2.png' className='loading-img'/> )           
          : ( <Layout /> )
        }
      </div>
      <GlobalStyle /> 
    </>
  );
}

export default App;
