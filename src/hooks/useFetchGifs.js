import { useEffect, useState } from "react/cjs/react.development"
import {getGifs} from '../helpers/getGifs'
export const useFetchGifs = (category) =>{
    const [state, setState] = useState({
        data: [],
        loading: true,
    });
    useEffect (() => {
        getGifs( category )
        .then(imgs =>{
                         
                // console.log(imgs);
                
                setState({
                    data: imgs,
                    loading: false,
                })
           
            
        });
    },[category])

    return state // data [] y loading true
}