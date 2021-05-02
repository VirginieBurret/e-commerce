import axios from 'axios';

const instance = axios.create({
baseURL :'http://localhost:5001/e-commerce-40cdf/us-central1/apinp'
});

export default instance;