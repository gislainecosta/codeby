import { createStore } from 'redux';

const products = require('./db/products.json');

const initialState = {
    products: products.items,
    cart: []
};


function cartActions(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CART':
            const newProduct = action.payload;
            const productIndex = state.cart.findIndex((product) => {
                return product.productId === newProduct.productId;
            });

            let newCart;
            if (productIndex === -1) {
                newCart = [...state.cart, { ...newProduct, quantity: 1 }];
            } else {
                alert('O produto já está no  carrinho')
            }

            return { ...state, cart: [...state.cart, newCart] }
        default:
            return state;
    }
}

const store = createStore(cartActions)
export default store