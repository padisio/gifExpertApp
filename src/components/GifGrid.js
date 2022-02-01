import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => { 
  
    
   const {data:images, loading} = useFetchGifs( category );
 
    

  return (
    <>
      <h3 className='animate__animated animate__fadeInUp'>{ category }</h3>
      
    {loading && <img className='loading' width="200px" height="130px" src = "https://3.bp.blogspot.com/-T_2Mk0VWsPs/WKh_DNP_02I/AAAAAAAABF4/oBTlwNI52u8mdo9Y5deIxBzg7Em4n2pvQCLcB/s1600/loading%2Bgif%2B1.gif"/>}

      <div className='card-grid'>
          
         {
             images.map((img)=>  <GifGridItem key = {img.id} {...img} /> )
            }
              
                       
    </div>
            </>
  )
}
