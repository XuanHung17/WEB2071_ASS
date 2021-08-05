import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import Datail from '../pages/views/Admin/Datail'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Contact from '../pages/views/Main/Contact'
import Shop from '../pages/views/Main/Shop'
import Editproduct from '../pages/views/Admin/ProductEdit';
import Addproduct from '../pages/views/Admin/Productadd';
import Search from '../pages/views/Main/datail'


const Routers = ({ products, onRemove, onAdd, onUpdate }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleUpdate = (id, product) => {
        onUpdate(id, product)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products' render={(props) =>
                                <ProductsManager {...props} products={products} onRemove={onHandleRemove} />
                            }>
                            </Route>
                            <Route path='/admin/add'
                                render={(props) =>
                                    <Addproduct {...props} onAdd={onAdd} />}></Route>
                            <Route path='/admin/product/:id'
                                render={(props) =>
                                    <Editproduct {...props} products={products} onUpdate={onHandleUpdate} />
                                }
                            >
                            </Route>
                            <Route path='/admin/datail/:id'>
                              <Datail></Datail>
                         
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/admin" exact>
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/Contact">
                                <Contact />
                            </Route>
                            <Route path="/Search/:id">
                                <Search />
                            </Route>
                            <Route path="/Shop"
                                render={(props) =>
                                    <Shop  {...props} product={products} />}>
                                        </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers