// import axios from '../../config/axiosConfig';
import { publicClient, privateClient } from '../../config/axiosConfig';

const hotProducts = () => {
    return publicClient.get('/api/product/productHot')
}

const featuredProducts = () => {
    return publicClient.get('/api/product/FeaturedProduct')
}

const getProductByCategory = (idCategory) => {
    return publicClient.get(`/api/product/product/${idCategory}`)
}

export {
    hotProducts, getProductByCategory, featuredProducts
}
