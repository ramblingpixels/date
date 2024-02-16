import { useState } from "react";
import "./App.css";
import Confetti from "react-confetti";

function App() {
	const [size, setSize] = useState(1);

	const handleClick = () => {
		setSize(size + 0.2);
	};

	const [confetti, setConfetti] = useState(false);

	const throwConfetti = () => {
		setConfetti(true);
	};

	return (
		<div className="App">
			{confetti ? (
				<div>
					<h1>
						YAYYYYYYY! 🥳 <br /> I promise you won't regret this hehe
					</h1>
					{confetti && <Confetti />}
				</div>
			) : (
				<div>
					<h1>I'm sorry for messing up 😭</h1>
					<h2>I missed a clear sign from you because I'm stupid lol</h2>

					<h2>
						Will you please forgive me and do me the honour of going out with
						me? 🥺🌹
					</h2>
					<div className="buttons">
						<button
							className="yes-btn"
							style={{
								transform: `scale(${size})`,
								transition: "transform 0.3s ease",
							}}
							onClick={throwConfetti}
						>
							Yes
						</button>

						<button className="no-btn" onClick={handleClick}>
							No
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
