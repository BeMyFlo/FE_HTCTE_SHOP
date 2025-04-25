import axios from '../../config/axiosConfig';

const getAllCategory = () => {
    return axios.get('/api/category/category')
}

export {
    getAllCategory
}
