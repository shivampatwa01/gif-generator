import React, {useEffect, useState} from 'react'
import axios from 'axios';



const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const useGif = (tag) => {

    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
     const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;


    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');
   

    async function fetchData(tag) {
        setLoading(true);
        //const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data} = await axios.get(tag ? tagUrl : randomUrl);
        const imageSource = data.data.images.downsized_large.url;
    
        setGif(imageSource);
        setLoading(false);
    }

    useEffect( () => {
        fetchData();
    },[])

    return{gif, loading, fetchData};

}
