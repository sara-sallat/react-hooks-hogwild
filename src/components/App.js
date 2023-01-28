import React from "react";
import Nav from "./Nav";
import Nav from "./Nav";
import Hog from "./Hog";
import HogForm from "./HogForm";
import hogs from "../porkers_data";


function App() {
	return (
		<div className="App">
			<Nav />
			<Hog />
			<HogForm />
		</div>
	);
}

export default App;
