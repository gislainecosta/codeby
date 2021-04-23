import './App.css';
import { Provider } from 'react-redux';
import store from './store.tsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header.tsx'
import Home from './pages/Home.tsx';
import Cart from './pages/Cart.tsx';


const routes = [
  {
    path: '/',
    component: <Home />
  },
  {
    path: '/carrinho',
    component: <Cart />
  }
];

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <div className='app'>
          <BrowserRouter>
            <Header />
            <Switch>
              {
                routes.map(
                  (route) => {
                    return <Route key={route.path} exact path={route.path}>
                      {route.component}
                    </Route>;
                  }
                )
              }
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </Provider>
  );
}

export default App;
