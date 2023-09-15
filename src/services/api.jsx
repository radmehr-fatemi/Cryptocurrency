import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const getCrypto = async () => {
    const response = await axios.get(BASE_URL);
    const getLocalData = window.localStorage.getItem("responseLocal")

    if (response.data.length) {
        return response.data
    } else {
        return JSON.parse( getLocalData )
    }


}

export { getCrypto }