import React from 'react'

const GifGridItem = ({title, url}) => {

    // console.log( title, url);

    return (
        <div className="card animate__animated animate__fadeIn">
            <p>{title}</p>
            <img src={url} alt={title} />
            
        </div>
    )
}

export default GifGridItem;
