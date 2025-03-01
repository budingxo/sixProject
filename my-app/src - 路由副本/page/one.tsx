import React from "react";
import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
	const navigate = useNavigate();
	return (
		<>
			123
			<button onClick={() => navigate("/cnm")}>111</button>
		</>
	)
}
export default App;   