import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-8b572/us-central1/api'  //THE API URL
})
export default instance;