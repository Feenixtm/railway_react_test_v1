import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("");

	useEffect(() => {
		async function fetchDataTest () {
			try {
				const response = await fetch("https://railwaybackendtestv1-production.up.railway.app/");
				
				if (!response.ok) {
					throw new Error("An error occurred while attempting a fetch request.");
				}

				const data = await response.json();
				console.log(data);
				setMessage(data.message);
			} catch (error) {
				console.error("Fatal error occurred during fetch request: " + error);
			}
	
		}

		fetchDataTest();
	})

  return (
		<>
			<h1>Hi Jason</h1>
			<p>{ message }</p>
		</>
 	)
}

export default App
