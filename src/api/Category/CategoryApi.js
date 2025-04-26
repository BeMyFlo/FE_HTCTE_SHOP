// import axios from '../../config/axiosConfig';
import { publicClient, privateClient } from '../../config/axiosConfig';

const getAllCategory = () => {
    return publicClient.get('/api/category/category')
}

export {
    getAllCategory
}
