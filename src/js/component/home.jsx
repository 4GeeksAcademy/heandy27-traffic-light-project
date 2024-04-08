import React, {useState} from "react";
import Traffic from "./Traffic"
import Stick from "./Stick";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [turnOn, setTurnOn] = useState(false)
	return (
		<div className="text-center">
			<Stick />
			<Traffic />
		</div>
	);
};

export default Home;
