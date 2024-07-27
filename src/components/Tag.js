import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Spinner } from './Spinner';
import useGif from '../hook/useGif';




const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const Tag = () => {

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');
   const [tag, setTag] = useState("car");
    

    async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
    
        setGif(imageSource);
        setLoading(false);
    }

    useEffect( () => {
        fetchData();
    },[])

   // const {gif, loading, fetchData} = useGif(tag);

    function clickHandler(){
        fetchData(tag);
    }

    function changeHandler(event){
         setTag(event.target.value);
    }

  return (
    <div className='w-1/2  bg-violet-500 rounded-lg px-5 py-3 border border-black
    flex flex-col items-center gap-y-2 mt-8'>
        <h1 className='text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>

        {
             loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
        }

        <input
           className='buttoncol w-10/12 rounded-lg text-lg text-center py-2 mt-[15px]'
            onChange={changeHandler}
            value = {tag}
        />

        
        <button onClick={clickHandler}
        className='buttoncol w-10/12 rounded-lg text-lg py-2 mb-[15px]'>
            
            Generate
            
            </button>
    </div>
  )
}
