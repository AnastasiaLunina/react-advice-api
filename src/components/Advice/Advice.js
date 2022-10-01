import React, { useState, useEffect } from 'react';

import './Advice.css';
import twitter from '../../img/twitter.png';
import like from '../../img/love.png';
import newImg from '../../img/new.png'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Advice = () => {
    
    const [advice, setAdvice] = useState('');
    const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem('favorite')) || []);
    
    useEffect(() => {
        window.localStorage.setItem('favorite', JSON.stringify(favorite));
      }, [favorite]);

    const request = async function fetchData() {
            const response = await fetch(`http://www.boredapi.com/api/activity/`);
            const data = await response.json();
            setAdvice(data.activity)
        }

    useEffect(() => {
        request();
    }, [])    

    function tweetQuote() {
        const twitterUrl = `https://twitter.com/intent/tweet?text=The advice of the day: ${advice}`;
        window.open(twitterUrl, '_blank');
    }

    function addToFav() {
        let favArray = [...favorite];
        if (favArray.includes(advice) === false) {
            favArray.push(advice);
            setFavorite(favArray)
        } else {
            MySwal.fire('You already added this one')
        }
        // console.log(favArray)
    }

    return(
        <div>
            <h2>{advice}</h2>
            <button onClick={addToFav} className='btn btn-like'><img src={like} alt='twitter'className='img-btn img-btn-like'/></button>
            <button onClick={request} className='btn btn-new'><img src={newImg} alt='twitter'className='img-btn img-btn-new'/></button>
            <button onClick={tweetQuote} className='btn'><img src={twitter} alt='twitter' className='img-btn'/></button>    
            <ul>
                {favorite.map((item, index) => (
                    <li key={index} className='list-item'>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Advice;