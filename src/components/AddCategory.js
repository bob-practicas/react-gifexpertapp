import React, { useState } from 'react'
import  PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {


    const [valueInput, setValueInput] = useState('');

    const handleInputChange = (e)=>{

        setValueInput(e.target.value);
        
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log('Submit echo')
        setCategories( cate => [valueInput, ...cate ]);
        setValueInput('');

    }

    return (
    
            <form onSubmit={ handleSubmit }>

                <input
                    value={ valueInput }
                    onChange={ handleInputChange }
                />

            </form>
       
    )
}


 AddCategory.propTypes = {
     setCategories: PropTypes.func.isRequired
 }

