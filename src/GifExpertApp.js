import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Navidad']);

    return(
        <>
            <h1>GifExpertApp</h1>
            

            <AddCategory  setCategories={setCategories} />
            
            

            
                {
                    categories.map((category)  => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            
                
        </>
    )
}

export default GifExpertApp;
