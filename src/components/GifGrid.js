import React from 'react'
import { useFetchGift } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGift(category);

    return (
        <>
            <hr />
            <h3 className="animate__animated animate__fadeIn">{category}</h3>   

                { loading && <p className="animate__animated animate__flash">Loading</p> }

                <div className="contenedor-card">{
                    images.map( img =>(
                        <GifGridItem 
                            key = {img.id}
                            {...img}
                        />
                    ))
                } </div>                        
        </>
    );
}

export default GifGrid
