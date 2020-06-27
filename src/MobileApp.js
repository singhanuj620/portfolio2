import React, { useState } from 'react';
import { PageContext } from './Context/PageContext'
import './css/MobileApp.css'

import MNavbar from './Components/Mobile/MNavbar'
import Content from './Components/Mobile/Content'

const MobileApp = () => {

  const [pageName, setPageName] = useState("about")

  const changePageName = (page) => {
    setPageName(page)
  }

  return (
    <PageContext.Provider value={{ pageName, setPageName }}>
      <MNavbar changePageName={changePageName}/>
      <Content pageName={pageName}/>
    </ PageContext.Provider>
  );
}

export default MobileApp;
