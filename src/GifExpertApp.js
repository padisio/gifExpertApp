import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['']);

    
  return (<>
    
    <div className='titleContainer'>
    <img className='logo' src={require('./images/gifExpertAppLogo.png')} alt="GifExpertArppLogo"/>
    <h2 className='titleApp'>GifExpertApp</h2>   
    </div>
    <AddCategory setCategories={ setCategories }/>
    <hr />
    <ol>
        {
            categories.map(category => (
                <GifGrid 
                category = { category }
                key = { category }
                />
            ))

        }
    </ol>

  </>
  )
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
