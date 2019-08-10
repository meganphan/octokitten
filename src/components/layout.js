import React from 'react';
import Footer from './footer'

const Layout = (props) => {
    return(
      <div className="container">
        {props.children}
        <Footer />
      </div>
    )
  
}

export default Layout;
