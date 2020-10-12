import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GiGrid } from './components/GiGrid';


export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Pokemon'])

    // const handleAdd = ()=>{
    //     setCategories([...categories, 'Goku']);
    // }
    
  

    return (
        <>
            <h2>Gift Expert App</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            
            {/* <button
            onClick={ handleAdd }
            >Agregar</button> */}

            <ol>
                {
                    categories.map( category =>(
                       <GiGrid 
                       key={ category}
                       category={ category } />
                        ))
                }
            </ol>
        </>
    )
}

