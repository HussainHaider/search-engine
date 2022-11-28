import axios from 'axios';

// create instance so that all API uses the same object
const instance = axios.create({
  timeout: 5000,
});

export default instance;
