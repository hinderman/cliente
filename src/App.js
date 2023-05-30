import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import SearchFlights from "./components/SearchFlights"

function App() {
	const user = localStorage.getItem("accessToken");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Login />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/searchFlights" exact element={<SearchFlights />} />
		</Routes>
	);
}

export default App;
