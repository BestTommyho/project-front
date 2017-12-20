import axios from 'axios';
import { domain } from './api_config';

axios.defaults.baseURL = domain;

axios.defaults.withCredentials = true;

export default axios;