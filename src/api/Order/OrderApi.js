// import axios from '../../config/axiosConfig';
import { publicClient, privateClient } from '../../config/axiosConfig';

const postOrder = (data) => {
    return publicClient.post('/api/order/order/create', data)
}

export {
    postOrder
}
