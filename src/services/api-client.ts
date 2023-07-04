import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'aea9c5f0967047048aa0105a2f412c32'
    }
});