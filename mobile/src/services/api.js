import axios from 'axios';

const api = axios.create({
    baseURl: 'http://192.168.1.4:3000'
});

export default api;