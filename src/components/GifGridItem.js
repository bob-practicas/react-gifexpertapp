import React from 'react'

export const GifGridItem = ( props ) => {

    

    return (
        <div className="card">
           <img src={ props.url } />
           <p> { props.title}</p>
        </div>
    )
}
