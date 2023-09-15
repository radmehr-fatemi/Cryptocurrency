import React, { useState, useEffect } from 'react';

//Component
import Coin from './shared/Coin';

//API
import { getCrypto } from '../services/api';

//GIF
import loadingGif from "../assets/loading.gif";

//Style
import style from "./Landing.module.scss";

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            setCoins(await getCrypto())
        }
        fetchAPI()
    }, [])

    const searchHandler = event => {
        setSearch(event.target.value)
    }
    const searchChoice = coins.filter( item => item.name.toLowerCase().includes( search.toLowerCase() ) )

    return (
        <div className={style.landing}>
            {!coins.length ?
                <div className={style.snipper}>
                    <img src={loadingGif} alt="Loading" />
                    <h1> Loading </h1>
                </div> :

                <div>
                    <div className={style.searchLanding}>
                        <input type="search" value={search} onChange={searchHandler} placeholder='search..' />
                    </div>

                    <div>
                        { searchChoice.map(coin => <Coin key={coin.id} coinData={ coin } />)}
                    </div>
                </div>

            }
        </div>
    );
};

export default Landing;