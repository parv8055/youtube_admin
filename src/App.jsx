import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Category from './pages/Category'
import Order from './pages/Order'
import Transaction from './pages/Transaction'
import Customers from './pages/Customers'
import CategoryAdd from './pages/CategoryAdd'
import Subcategory from './pages/Subcategory'
import Subcategoryadd from './pages/Subcategoryadd'
import ProductsAdd from './pages/ProductsAdd'
import Messages from './pages/Messages'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/productadd" element={<ProductsAdd />} />
                <Route path="/register" element={<Register />} />
                <Route path="/category" element={<Category />} />
                <Route path="/subcategory" element={<Subcategory />} />
                <Route path="/categoryadd" element={<CategoryAdd />} />
                <Route path="/subcategoryadd" element={<Subcategoryadd />} />
                <Route path="/orders" element={<Order />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/transactions" element={<Transaction />} />
                <Route path="/messages" element={<Messages />} />                
            </Routes>
        </Router>
    )
}

export default App