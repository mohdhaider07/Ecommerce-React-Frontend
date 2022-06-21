import "./App.css";
import Home from "./pages/Home";
import ProductsList from "./pages/ProductsList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
function App() {
	return (
		<div className="App">
			{/* <Home /> */}
			{/* <ProductsList /> */}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<Routes>
					<Route path="/products/:category" element={<ProductsList />} />
				</Routes>
				<Routes>
					<Route path="/product/:id" element={<Product />} />
				</Routes>
				<Routes>
					<Route path="/cart" element={<Cart />} />
				</Routes>
				<Routes>
					<Route
						path="/login"
						element={user ? <Navigate to="/" /> : <Login />}
					/>
				</Routes>
				<Routes>
					<Route
						path="/register"
						element={user ? <Navigate to="/" /> : <Register />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
