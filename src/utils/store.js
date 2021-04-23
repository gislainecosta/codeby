import { createStore } from 'redux';

const products = require('../db/products.json');

const initialState = {
    products: products.items,
    cart: [ ],
    totalCart: 0
};


function cartActions(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CART':
            const newProduct = action.payload;
            const productIndex = state.cart.findIndex((product) => {
                return product.id === newProduct.id;
            });

            let newCart;
            let newTotal;
            if (productIndex === -1) {
                newCart = [...state.cart, newProduct];
                newTotal = state.totalCart + Number(newProduct.actualPrice)
            } else {
                alert('O produto já está no  carrinho')
                newCart = [...state.cart]
                newTotal = state.totalCart
            }
            return { ...state, cart: newCart, totalCart: newTotal }

        case 'REMOVE_CART':
            const productRemoved = action.payload;
            const newCartRemoved = state.cart.filter((product) => {
                return product.id !== productRemoved.id
            })

            const newPriceTotal = state.totalCart - Number(productRemoved.price)
            return { ...state, cart: newCartRemoved, totalCart: newPriceTotal }

        case 'CLEAR_CART':
            return { ...state, cart: [], totalCart: 0 }
        
            default:
            return state;
    }
}

const store = createStore(cartActions)
export default store