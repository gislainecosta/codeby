import { createStore } from 'redux';

const products = require('../db/products.json');

const initialState = {
    products: products.items,
    cart: [
    ]
};


function cartActions(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CART':
            console.log('CARRINHO', state.cart)
            const newProduct = action.payload;
            const productIndex = state.cart.findIndex((product) => {
                return product.id === newProduct.id;
            });

            let newCart;
            if (productIndex === -1) {
                newCart = [...state.cart, newProduct];
            } else {
                alert('O produto já está no  carrinho')
                newCart = [...state.cart]
            }
            console.log(newCart)
            return { ...state, cart: newCart }
        default:
            return state;
    }
}

const store = createStore(cartActions)
export default store