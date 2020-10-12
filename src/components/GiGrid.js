import React from 'react'
import { useFetchGift } from '../hooks/useFetchGift'
import { GifGridItem } from './GifGridItem';
// import { GifExpertApp } from '../GifExpertApp';
// import { GifGridItem } from './GifGridItem';
//  import { getGift } from '../helpers/getGits';

export const GiGrid = ({ category }) => {

    const {data, loading} = useFetchGift(category);

   

    return (
        <>
        <h3>{category}</h3> 
        
        { loading && <p>cargando gif ... </p> }

        <div className="card-grid">
            {
                data.map(img =>(
                    <GifGridItem
                        key={ img.id}
                        {...img }
                    />
                ))
            }
        </div>
     
        </>
    )
}
