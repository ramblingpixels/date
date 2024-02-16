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
					<h1>Thank you so much! I promise you won't regret this!</h1>
					{confetti && <Confetti />}
				</div>
			) : (
				<div>
					<h2>I know I messed up BIG TIME</h2>
					<h2>I'm stupid</h2>
					<h1>I'm so sorry</h1>
					<h1>
						Will you please forgive me and do me the honour of going out with
						me?
					</h1>
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
