import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";

import "./styles.css";

export default function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<CheckoutPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
