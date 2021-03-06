import Axios from 'axios';
import { CART_ADD_ITEM } from "../constants/cartConstans";

export const AddtoCart = (productId, qty) => async(dispatch, getState) =>{
    const { data } = await Axios.getState(`/api/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            name:data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data.id,
            qty,
        },
    });
};