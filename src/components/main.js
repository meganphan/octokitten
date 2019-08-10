import React from 'react'

const Main = (props) => {
    return(
        <div id="main" className="hidden">
            {props.children}
        </div>
    )
}

export default Main