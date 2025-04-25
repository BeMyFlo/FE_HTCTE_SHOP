import axios from '../../config/axiosConfig';

const hotProducts = () => {
    return axios.get('/api/product/productHot')
}

const featuredProducts = () => {
    return axios.get('/api/product/FeaturedProduct')
}

const getProductByCategory = (idCategory) => {
    return axios.get(`/api/product/product/${idCategory}`)
}

export {
    hotProducts, getProductByCategory, featuredProducts
}
