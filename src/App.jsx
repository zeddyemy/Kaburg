import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RootLayout from "./components/layout/RootLayout/RootLayout";
import Home from "./pages/Home/Home";

import "./assets/css/esho/esho.css";
import "./assets/css/variables.css";
import "./assets/css/main.css";
import "./assets/library/boxicons/css/boxicons.min.css";

function App() {
	return (
		<>
			<Router>
				<RootLayout>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</RootLayout>
			</Router>
		</>
	);
}

export default App;
