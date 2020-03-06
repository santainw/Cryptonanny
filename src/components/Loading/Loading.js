import React from 'react'

import './Loading.scss'

function Loading() {

    return (
        <div style={{width:'100%', textAlign: 'center'}}><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
    )
}

export default Loading