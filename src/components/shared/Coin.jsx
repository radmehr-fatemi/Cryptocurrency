import React from 'react';

//Style
import style from "./Coin.module.scss";

const Coin = ({ coinData }) => {

    const { symbol, name, image, current_price, price_change_24h, market_cap_rank, fully_diluted_valuation } = coinData;

    return (
        <div className={style.coin}>
            <div className={style.imageCoin}>
                <img src={image} alt="coin photo" />
                <h3> {name} </h3>
            </div>

            <div className={style.spanCoin}>
                <div>
                    <span className={style.symbol}> {symbol} </span>
                    <span className={style.current_price}> {current_price} $ </span>
                </div>

                <div>
                    <span
                        className={price_change_24h > 0 ?
                            style.price_change_24h_goingUp :
                            style.price_change_24h_goingDown}>
                        {price_change_24h}
                    </span>

                    <span className={style.market_cap_rank}> {market_cap_rank} </span>
                </div>

                <span className={style.fully_diluted_valuation}> {fully_diluted_valuation} </span>
            </div>
        </div>
    );
};

export default Coin;