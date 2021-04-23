import { createStore } from 'redux';

const products = require('./db/products.json');

const initialState = {
    products: products.items,
    cart: [
        {
            quantity: 2,
            productId: 317,
            photo: 'http://codeby.vteximg.com.br/arquivos/ids/159939-800-1029/trufa-morango-30g.png?v=636916431597070000',
            name: 'TRUFA MORANGO',
            originalPrice: '5,35',
            actualPrice: '5,00',
            amount: 2
        },
        {
            quantity: 1,
            productId: 314,
            photo: 'http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000',
            name: 'Trufa BENDITO CACAU 55% CACAU 30 G',
            originalPrice: '5,35',
            actualPrice: '5,00',
            amount: 10
        }
    ]
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
                newCart = state.cart.map((product, index) => {
                    if (index === productIndex) {
                        return { ...product, quantity: product.quantity + 1 };
                    }
                });
            }
            return { cart: state.products.push(newCart) };
        default:
            return state;
    }
}

//             let newCart;
//             if (productIndex === -1) {
//                 newCart = [...state.cart, { ...newProduct, quantity: 1 }];
//             } else {
//                 newCart = state.cart.map((product, index) => {
//                     if (index === productIndex) {
//                         return { ...product, quantity: product.quantity + 1 };
//                     }
//                 });
//             }
//             return { products: state.products.push(newCart) };

//         case "REMOVE":
//             return { products: state.products.filter() };

//         default:
//             return state;
//     }
// }

const store = createStore(cartActions)
export default store