import React from "react";
import "./App.scss";
import Header from "./component/Header/Header";
import Headline from "./component/Headline/Headline";

function App() {
	return (
		<div>
			<Header></Header>

			<main>
				<Headline header={"post"} desc="click the button to render posts" />
			</main>
		</div>
	);
}

export default App;
